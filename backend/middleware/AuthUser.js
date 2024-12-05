import Users from "../models/userModel.js";

export const verifyUser = async (req, res, next) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
        }

        const user = await Users.findOne({
            where: {
                uuid: req.session.userId
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        req.userId = user.id_user;
        req.id_role = user.id_role;

        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

export const adminOnly = async (req, res, next) => {
    try {
        const user = await Users.findOne({
            where: {
                uuid: req.session.userId
            }
        });

        if (!user) {
            return res.status(404).json({ msg: "User tidak ditemukan" });
        }

        if(user.id_role !== 1){
            return res.status(403).json({msg : 'Akses terlarang'});
        }
        next();
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};
