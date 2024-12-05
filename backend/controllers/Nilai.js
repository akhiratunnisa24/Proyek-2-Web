import Nilai from "../models/nilaiModel.js";
import argon2 from "argon2";

export const getNilai = async(req, res) => {
    try{
        const response = await Nilai.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getNilaiById = async(req, res) => {
    try{
        const response = await Nilai.findOne({
            where: {
                id_nilai: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createNilai = (req, res) => {
    
}

export const updateNilai = (req, res) => {
    
}
