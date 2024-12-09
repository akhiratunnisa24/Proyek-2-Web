import Users from "../models/userModel.js";
import Role from "../models/roleModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) => {
    try{
        let response;
        if(req.id_role === 1){
                response = await Users.findAll({
                attributes:['uuid','username','id_role','is_active'],
                include: [
                    {
                        model: Role,      
                        attributes: ['nama_role'],  
                    }
                ],
            });
            res.status(200).json(response);
        }else{
            res.status(403).json({msg : 'Akses terlarang'});
        }
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getUsersById = async (req, res) => {
    try {
        const response = await Users.findOne({
            attributes: ['uuid', 'username', 'id_role', 'is_active'], 
            
            where: {
                uuid: req.params.id 
            }
        });

        if (!response) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};


export const createUsers = async(req, res) => {
    const { username, password, confPassword, id_role,is_active,status,created_at,updated_at } = req.body;

    if (password !== confPassword)
        return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });

    try {
        const hashPassword = await argon2.hash(password);

        await Users.create({
            username: username,
            password: hashPassword,
            id_role: id_role,
            is_active: is_active,
            status: status,
            created_at: created_at,
            updated_at: updated_at
        });

        res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateUsers = async(req, res) => {
    const user = await Users.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
   
    const { username, password, confPassword, id_role, is_active, status, created_at, updated_at } = req.body;
    let hashPassword = user.password;
    if (password && password !== "") {

        if (password !== confPassword) {
            return res.status(400).json({ msg: "Password dan Confirm Password tidak cocok" });
        }
        hashPassword = await argon2.hash(password);
    }

    try {
        await Users.update(
            {
                username: username || user.username,  
                password: hashPassword,
                id_role: id_role || user.id_role, 
                is_active: is_active || user.is_active, 
                status: status || user.status,  
                created_at: created_at || user.created_at,  
                updated_at: updated_at || new Date()  
            },
            {
                where: {
                    uuid: req.params.id  
                }
            }
        );

        res.status(200).json({ msg: "Data user berhasil diupdate" });

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}
