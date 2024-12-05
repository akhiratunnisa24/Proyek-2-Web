import Role from "../models/roleModel.js";
import argon2 from "argon2";

export const getRoles = async(req, res) => {
    try{
        const response = await Role.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getRolesById = async(req, res) => {
    try{
        const response = await Role.findOne({
            where: {
                id_role: req.params.id
            }
        });
        
        if (!response) {
            return res.status(404).json({ msg: "Role tidak ditemukan" });
        }

        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createRoles = async(req, res) => {
    const { nama_role } = req.body;
    try {

        await Role.create({
            nama_role: nama_role,
        });

        res.status(201).json({ msg: "Role Baru berhasil ditambahkan" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
}

export const updateRoles = async(req, res) => {
    const role = await Role.findOne({
        where: {
            id_role: req.params.id
        }
    });
    if (!role) return res.status(404).json({ msg: "Role tidak ditemukan" });
    const { nama_role } = req.body;
    try {
        await Role.update(
            {
                nama_role: nama_role || role.nama_role,  
            },
            {
                where: {
                    id_role: req.params.id 
                }
            }
        );

        res.status(200).json({ msg: "Role berhasil diupdate" });

    } catch (error) {

        res.status(400).json({ msg: error.message });
    }
}
