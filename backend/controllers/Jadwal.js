import Jadwal from "../models/jadwalModel.js";
import argon2 from "argon2";

export const getJadwal = async(req, res) => {
    try{
        const response = await Jadwal.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getJadwalById = async(req, res) => {
    try{
        const response = await Jadwal.findOne({
            where: {
                id_jadwal: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createJadwal = (req, res) => {
    
}

export const updateJadwal = (req, res) => {
    
}
