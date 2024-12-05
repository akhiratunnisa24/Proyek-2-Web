import Kelas from "../models/kelasModel.js";
import argon2 from "argon2";

export const getKelas = async(req, res) => {
    try{
        const response = await Kelas.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getKelasById = async(req, res) => {
    try{
        const response = await Kelas.findOne({
            where: {
                id_kelas: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createKelas = (req, res) => {
    
}

export const updateKelas = (req, res) => {
    
}
