import Prestasi from "../models/prestasiModel.js";
import argon2 from "argon2";

export const getPrestasi = async(req, res) => {
    try{
        const response = await Prestasi.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getPrestasiById = async(req, res) => {
    try{
        const response = await Prestasi.findOne({
            where: {
                id_prestasi: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createPrestasi = (req, res) => {
    
}

export const updatePrestasi = (req, res) => {
    
}
