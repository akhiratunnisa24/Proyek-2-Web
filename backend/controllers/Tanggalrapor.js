import Tanggal_rapor from "../models/tanggalraporModel.js";
import argon2 from "argon2";

export const getTanggal_rapor = async(req, res) => {
    try{
        const response = await Tanggal_rapor.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getTanggal_raporById = async(req, res) => {
    try{
        const response = await Tanggal_rapor.findOne({
            where: {
                id_tanggal: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createTanggal_rapor = (req, res) => {
    
}

export const updateTanggal_rapor = (req, res) => {
    
}
