import React from 'react'

const sidebarSiswa = () => {
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
                        <Link to="/home">
                            <i class="fas fa-home"></i>
                            <p>Dashboard</p>
                        </Link>
                    </li>
                    <li class="nav-section">
                        <span class="sidebar-mini-icon">
                            <i class="fa fa-ellipsis-h"></i>
                        </span>
                        <h4 class="text-section">Components</h4>
                    </li>
                    <li class="nav-item">
                        <Link to="/mapel_aktif">
                            <i class="fas fa-truck"></i>
                            <p>Mapel Aktif</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/cetak_rapor">
                            <i class="fas fa-truck"></i>
                            <p>Cetak Rapor</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/new_password">
                            <i class="fas fa-truck"></i>
                            <p>Ganti Password</p>
                        </Link>
                    </li>
                    <li class="nav-item">
                        <Link onClick={handleLogout}>
                            <i class="fas fa-lock"></i>
                            <p>LOGOUT</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default sidebarSiswa