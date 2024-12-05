import Ekstrakurikuler from "../models/ekstrakurikulerModel.js";
import argon2 from "argon2";

export const getEkstrakurikuler = async(req, res) => {
    try{
        const response = await Ekstrakurikuler.findAll();
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getEkstrakurikulerById = async(req, res) => {
    try{
        const response = await Ekstrakurikuler.findOne({
            where: {
                id_ekskul: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createEkstrakurikuler = (req, res) => {
    
}

export const updateEkstrakurikuler = (req, res) => {
    
}
