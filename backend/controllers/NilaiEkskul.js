import Nilai_ekskul from "../models/nilaiekskulModel.js";
import argon2 from "argon2";

export const getNilai_ekskul = async(req, res) => {
    try{
        const response = await Nilai_ekskul.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getNilai_ekskulById = async(req, res) => {
    try{
        const response = await Nilai_ekskul.findOne({
            where: {
                id_nilaiekskul: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createNilai_ekskul = (req, res) => {
    
}

export const updateNilai_ekskul = (req, res) => {
    
}
