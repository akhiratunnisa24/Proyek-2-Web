import Kehadiran from "../models/kehadiranModel.js";
import argon2 from "argon2";

export const getKehadiran = async(req, res) => {
    try{
        const response = await Kehadiran.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getKehadiranById = async(req, res) => {
    try{
        const response = await Kehadiran.findOne({
            where: {
                id_kehadiran: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createKehadiran = (req, res) => {
    
}

export const updateKehadiran = (req, res) => {
    
}
