import Guru from "../models/guruModel.js";
import Users from "../models/userModel.js";
import argon2 from "argon2";

export const getGuru = async(req, res) => {
    try{
        let response;
        if(req.id_role === 1){
            response = await Guru.findAll({
                attributes:['id_guru','nama_guru','nip_guru','no_telp','alamat','status'],
                include:[{
                    model:Users,
                    attributes: ['uuid'],  
                }]
            });
            res.status(200).json(response);
        }else{
            res.status(403).json({msg : 'Akses terlarang'});
        }
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getGuruById = async(req, res) => {
    try{
        const response = await Guru.findOne({
            attributes: ['nama_guru', 'nip', 'id_role', 'is_active'], 
            where: {
                id_guru: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createGuru = (req, res) => {
    
}

export const updateGuru = (req, res) => {
    
}
