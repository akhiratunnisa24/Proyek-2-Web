import Guru from "../models/guruModel.js";
import Users from "../models/userModel.js";
import argon2 from "argon2";

export const getGuru = async(req, res) => {
    try{
        let response;
        if(req.id_role === 1){
            response = await Guru.findAll({
                attributes:['id_guru','nama_guru','nip_guru','no_telp','alamat','status'],
                include:[{
                    model:Users,
                    attributes: ['uuid'],  
                }]
            });
            res.status(200).json(response);
        }else{
            res.status(403).json({msg : 'Akses terlarang'});
        }
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

export const createGuru = async(req, res) => {
    const { nip_guru, nama_guru, tempat_lahir, tgl_lahir,alamat,gender,no_telp,status,created_at} = req.body;
    try {
        const existingGuru = await Guru.findOne({ where: { nip_guru: nip_guru } });
        if (existingGuru) {
            return res.status(400).json({ msg: "Data Guru dengan NIP tersebut sudah ada dalam system" });
        }

        await Guru.create({
            id_user: null,
            nip_guru: nip_guru,
            nama_guru: nama_guru,
            tempat_lahir: tempat_lahir,
            tgl_lahir: tgl_lahir,
            alamat: alamat,
            gender: gender,
            no_telp: no_telp,
            status: status,
            created_at: created_at,
            updated_at: null
        });

        res.status(201).json({ msg: "Data Guru berhasil ditambahkan" });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            return res.status(400).json({ msg: "Validasi gagal", errors });
        }
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export const updateGuru = async (req, res) => {
    const guru = await Guru.findOne({ 
        where: { 
            id_guru: req.params.id
        } 
    });
    if (!guru) {
        return res.status(404).json({ msg: "Data Guru tidak ditemukan" });
    }
    const { nip_guru, nama_guru, tempat_lahir, tgl_lahir, alamat, gender, no_telp, status, created_at } = req.body;
   
    try {
        await Guru.update(
            {
                nip_guru: nip_guru   || guru.nip_guru,
                nama_guru: nama_guru || guru.nama_guru,
                tempat_lahir: tempat_lahir || guru.tempat_lahir,
                tgl_lahir: tgl_lahir || guru.tgl_lahir,
                alamat: alamat || guru.alamat,
                gender: gender || guru.gender,
                no_telp: no_telp || guru.no_telp,
                status: status || guru.status,
                created_at: created_at || guru.created_at,  
                updated_at: new Date(), 
            },
            {
                where: {
                    id_guru: req.params.id  
                }
            }
        );

        res.status(200).json({ msg: "Data Guru berhasil diupdate" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
