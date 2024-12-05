import Sikap from "../models/sikapModel.js";
import argon2 from "argon2";

export const getSikap = async(req, res) => {
    try{
        const response = await Sikap.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getSikapById = async(req, res) => {
    try{
        const response = await Sikap.findOne({
            where: {
                id_sikap: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createSikap = (req, res) => {
    
}

export const updateSikap = (req, res) => {
    
}
