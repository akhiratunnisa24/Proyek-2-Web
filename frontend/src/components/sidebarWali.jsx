import React from 'react'
import { NavLink } from 'react-router-dom';

const sidebarWali = () => {
  return (
    <div class="sidebar has-shadow">   
        <div class="sidebar-wrapper scrollbar-inner">
            <div class="sidebar-content">
                <div class="user">
                    <div class="avatar-sm float-left mr-2">
                        <img src={Profile} alt="..." class="avatar-img rounded-circle" />
                    </div>
                    <div class="info">
                        <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                            <span>
                                {nama_user}
                                <span class="user-level">{role}</span>
                            </span>
                        </a>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item">
                        <NavLink to="/home">
                            <i class="fas fa-home"></i>
                            <p>Dashboard</p>
                        </NavLink>
                    </li>
                    <li class="nav-section">
                        <span class="sidebar-mini-icon">
                            <i class="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 class="text-section">Components</h4>
                    </li>
                    <li class="nav-item">
                        <a data-toggle="collapse" href="#base">
                            <i class="fas fa-layer-group"></i>
                            <p>Data Nilai</p>
                            <span class="caret"></span>
                        </a>
                        <div class="collapse" id="base">
                            <ul class="nav nav-collapse">
                                <li>
                                    <NavLink to="/nilai_sikap">
                                        <span class="sub-item">Input Nilai Sikap</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/nilai_pengetahuan">
                                        <span class="sub-item">Data Nilai Pengetahuan</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/prestasi">
                                        <span class="sub-item">Input Prestasi</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/nilai_ekstrakurikuler">
                                        <span class="sub-item">Input Ekstrakurikuler</span>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/rekap_kehadiran">
                                        <span class="sub-item">Rekap Kehadiran</span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/rapor_siswa">
                            <i class="fas fa-truck"></i>
                            <p>Cetak Rapor</p>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink to="/new_password">
                            <i class="fas fa-truck"></i>
                            <p>Ganti Password</p>
                        </NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink onClick={handleLogout}>
                            <i class="fas fa-lock"></i>
                            <p>LOGOUT</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default sidebarWali