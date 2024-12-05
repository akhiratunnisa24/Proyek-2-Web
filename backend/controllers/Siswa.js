import Siswa from "../models/siswaModel.js";
import argon2 from "argon2";

export const getSiswa = async(req, res) => {
    try{
        const response = await Siswa.findAll();
        res.status(200).json(response);
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
