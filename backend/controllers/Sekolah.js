import Sekolah from "../models/sekolahModel.js";
import argon2 from "argon2";

export const getSekolah = async(req, res) => {
    try{
        const response = await Sekolah.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getSekolahById = async(req, res) => {
    try{
        const response = await Sekolah.findOne({
            where: {
                id_sekolah: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createSekolah = (req, res) => {
    
}

export const updateSekolah = (req, res) => {
    
}
