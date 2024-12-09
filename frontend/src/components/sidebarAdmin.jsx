import React from 'react'
import { NavLink } from 'react-router-dom';

function sidebarAdmin() {
  return (
    <div className="sidebar has-shadow">         
        <div className="sidebar-wrapper scrollbar-inner">
            <div className="sidebar-content">
                <div className="user">
                    <div className="avatar-sm float-left mr-2">
                        <img src={Profile} alt="..." className="avatar-img rounded-circle" />
                    </div>
                    <div className="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                            <span>
                                {nama_user}
                                <span className="user-level">{role}</span>
                            </span>
                        </a>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item">
                        <NavLink to="/home">
                            <i className="fas fa-home"></i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li className="nav-section">
                        <span className="sidebar-mini-icon">
                            <i className="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 className="text-section">Components</h4>
                    </li>
                    <li className="nav-item">
                        <a data-toggle="collapse" href="#base">
                            <i className="fas fa-layer-group"></i>
                            <p>Data User</p>
                            <span className="caret"></span>
                        </a>
                        <div className="collapse" id="base">
                            <ul className="nav nav-collapse">
                                <li>
                                    <NavLink to="/user">
                                        <span className="sub-item">User</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/role">
                                        <span className="sub-item">Role</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/sekolah">
                            <i className="fas fa-briefcase"></i>
                            <p>Profile Sekolah</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <a data-toggle="collapse" href="#pokok">
                            <i className="fas fa-file"></i>
                            <p>Data Pokok</p>
                            <span className="caret"></span>
                        </a>
                        <div className="collapse" id="pokok">
                            <ul className="nav nav-collapse">
                                <li>
                                    <NavLink to="/guru">
                                        <span className="sub-item">Data Guru</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/siswa">
                                        <span className="sub-item">Data Siswa</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/kelas">
                                        <span className="sub-item">Data Kelas</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/mapel">
                                        <span className="sub-item">Data Mata Pelajaran</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/jadwal">
                                        <span className="sub-item">Data Jadwal</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ekstrakurikuler">
                                        <span className="sub-item">Data Ekstrakurikuler</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/tanggal_rapor">
                            <i className="fas fa-briefcase"></i>
                            <p>Input Tanggal Rapor</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/new_password">
                            <i className="fas fa-briefcase"></i>
                            <p>Ganti Password</p>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink onClick={handleLogout}>
                            <i className="fas fa-lock"></i>
                            <p>LOGOUT</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default sidebarAdmin