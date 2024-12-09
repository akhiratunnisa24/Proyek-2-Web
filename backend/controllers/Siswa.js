import Siswa from "../models/siswaModel.js";
import argon2 from "argon2";

export const getSiswa = async(req, res) => {
    try{
        let response;
        if(req.id_role === 1){
            response = await Siswa.findAll({
                attributes:['id_siswa','nis','id_kelas','alamat','status'],
                include:[
                    {
                        model:Users,
                        attributes: ['uuid'],  
                    },
                    {
                        model: Kelas, 
                        attributes: ['nama_kelas'], 
                    }
                ]
            });
            res.status(200).json(response);
        }else{
            res.status(403).json({msg : 'Akses terlarang'});
        }
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getSiswaById = async(req, res) => {
    try{
        const response = await Siswa.findOne({
            where: {
                id_siswa: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createSiswa = (req, res) => {
    
}

export const updateSiswa = (req, res) => {
    
}
