import Users from "../models/userModel.js";
import Role from "../models/roleModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    
    if (!username || !password) {
        return res.status(400).json({ msg: "Username dan Password wajib diisi" });
    }

    try {
        const user = await Users.findOne({
            where: { username },
            include: [{
                model: Role, 
                attributes: ['nama_role'] 
            }]
        });

        if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });

        const match = await argon2.verify(user.password, password);
        if (!match) return res.status(400).json({ msg: "Wrong Password" });
        req.session.userId = user.uuid;

        const { uuid, username: userName, id_role, role } = user;
        const roleName = role ? role.nama_role : null; 

        res.status(200).json({
            uuid,
            username: userName,
            id_role,
            nama_role: roleName 
        });

    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const Me = async (req, res) => {
    try {
      if (!req.session.userId) {
        return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
      }
  
      const user = await Users.findOne({
        attributes: ['uuid', 'username', 'id_role'], 
        where: {
          uuid: req.session.userId
        }
      });
  
      if (!user) {
        return res.status(404).json({ msg: "User tidak ditemukan" });
      }
  
      res.status(200).json(user);
  
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};
  
export const Logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(400).json({ msg: "Tidak dapat logout" });
        }
        res.status(200).json({ msg: "Anda berhasil logout" });
    });
};

