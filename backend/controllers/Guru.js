import Guru from "../models/guruModel.js";
import argon2 from "argon2";

export const getGuru = async(req, res) => {
    try{
        const response = await Guru.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getGuruById = async(req, res) => {
    try{
        const response = await Guru.findOne({
            where: {
                id_guru: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createGuru = (req, res) => {
    
}

export const updateGuru = (req, res) => {
    
}
