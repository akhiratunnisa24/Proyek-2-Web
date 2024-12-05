import Mapel from "../models/mapelModel.js";
import argon2 from "argon2";

export const getMapel = async(req, res) => {
    try{
        const response = await Mapel.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getMapelById = async(req, res) => {
    try{
        const response = await Mapel.findOne({
            where: {
                id_mapel: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createMapel = (req, res) => {
    
}

export const updateMapel = (req, res) => {
    
}
