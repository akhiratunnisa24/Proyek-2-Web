import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Login() {
    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    axios.defaults.withCredentials = true; // Mengizinkan pengiriman cookies
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah halaman reload saat form dikirim
        axios.post('http://localhost:8081/login', {
            username: values.username,  // Mengirim data yang benar
            password: values.password
        })
        .then(res => {
            console.log(res.data);  // Menampilkan response untuk debugging
            if (res.data.Status === "Success") {
                Swal.fire({
                    icon: "success",
                    title: "SUCCESS",
                    text: "Login Berhasil"
                });
                // Berdasarkan role pengguna, arahkan ke halaman yang sesuai
                if (res.data.role === 'admin') {
                    navigate('/admin/dashboard');
                } else if (res.data.role === 'guru') {
                    navigate('/guru/dashboard');
                } else if (res.data.role === 'siswa') {
                    navigate('/siswa/dashboard');
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Role tidak dikenali",
                        text: "Gagal masuk berdasarkan role"
                    });
                }
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: res.data.Error || "Something went wrong"
                });
            }
        })
        .catch(err => {
            console.error(err);  // Menangani error dan menampilkan di console
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Server error, please try again later."
            });
        });
    };

    return (
        <div className="login">
            <div className="wrapper wrapper-login">
                <div className="container container-login animated fadeIn">
                    <h3 className="text-center">Silahkan Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="login-form">
                            <div className="form-group form-floating-label">
                                <input 
                                    id="username" 
                                    name="username" 
                                    type="text" 
                                    onChange={e => setValues({...values, username: e.target.value})} 
                                    className="form-control input-border-bottom" 
                                    required 
                                />
                                <label htmlFor="username" className="placeholder">Username</label>
                            </div>
                            <div className="form-group form-floating-label">
                                <input 
                                    id="password" 
                                    name="password" 
                                    type="password" 
                                    onChange={e => setValues({...values, password: e.target.value})} 
                                    className="form-control input-border-bottom" 
                                    required 
                                />
                                <label htmlFor="password" className="placeholder">Password</label>
                                <div className="show-password">
                                    <i className="flaticon-interface"></i>
                                </div>
                            </div>
                            <div className="form-action mb-3">
                                <button type="submit" className="btn btn-primary btn-rounded btn-login">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
