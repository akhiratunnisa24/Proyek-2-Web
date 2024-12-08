import Sekolah from "../models/sekolahModel.js";
import Users from "../models/userModel.js";
import argon2 from "argon2";

export const getSekolah = async(req, res) => {
    try{
        let response;
        if(req.id_role === 1){
            response = await Sekolah.findAll();
            res.status(200).json(response);
        }else{
            res.status(403).json({msg : 'Akses terlarang'});
        }
      
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const getSekolahById = async(req, res) => {
    try{
        const response = await Sekolah.findOne({
            where: {
                id_sekolah: req.params.id
            }
        });
        res.status(200).json(response);
    }catch(error){
        res.status(500).json({msg: error.message});
    }
}

export const createSekolah = async(req, res) => {
    
    const { nama_sekolah, npsn, nss, alamat,kode_pos,telepon,kelurahan,kecamatan,kab_kota,provinsi,website,email,kepsek, nip_kepsek} = req.body;
    try {
        await Sekolah.create({
            nama_sekolah: nama_sekolah,
            npsn: npsn,
            nss: nss,
            alamat: alamat,
            kode_pos: kode_pos,
            telepon: telepon,
            kelurahan: kelurahan,
            kecamatan: kecamatan,
            kab_kota: kab_kota,
            provinsi: provinsi,
            website: website,
            email: email,
            kepsek: kepsek,
            nip_kepsek: nip_kepsek,
        });

        res.status(201).json({ msg: "Sekolah Berhasil ditambahkan" });
    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            const errors = error.errors.map(err => err.message);
            return res.status(400).json({ msg: "Validasi gagal", errors });
        }
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
}

export const updateSekolah = async (req, res) => {
    const sekolah = await Sekolah.findOne({
        where: {
            id_sekolah: req.params.id
        }
    });

    if (!sekolah) return res.status(404).json({ msg: "Data tidak ditemukan" });

    const { nama_sekolah, npsn, nss, alamat, kode_pos, telepon, kelurahan, kecamatan, kab_kota, provinsi, website, email, kepsek, nip_kepsek } = req.body;

    try {
        await Sekolah.update(
            {
                nama_sekolah: nama_sekolah || sekolah.nama_sekolah,
                npsn: npsn || sekolah.npsn,
                nss: nss || sekolah.nss,
                alamat: alamat || sekolah.alamat,
                kode_pos: kode_pos || sekolah.kode_pos,
                telepon: telepon || sekolah.telepon,
                kelurahan: kelurahan || sekolah.kelurahan,
                kecamatan: kecamatan || sekolah.kecamatan,
                kab_kota: kab_kota || sekolah.kab_kota,
                provinsi: provinsi || sekolah.provinsi,
                website: website || sekolah.website,
                email: email || sekolah.email,
                kepsek: kepsek || sekolah.kepsek,
                nip_kepsek: nip_kepsek || sekolah.nip_kepsek,
            },
            {
                where: {
                    id_sekolah: req.params.id
                }
            }
        );

        res.status(200).json({ msg: "Sekolah berhasil diupdate" });

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};
