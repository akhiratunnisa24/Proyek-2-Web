import React from 'react'
import Navbars from '../components/Navbars'
import sidebarAdmin from '../components/sidebarAdmin'
import sidebarGuru from '../components/sidebarGuru'
import sidebarSiswa from '../components/sidebarSiswa'
import sidebarWali from '../components/sidebarWali';

const Layout = ({children}) => {
    let sidebarComponent;
    // if (id_role === 2) {
    //     sidebarComponent = <sidebarGuru />;
    // }else if (role === 3) {
    //     sidebarComponent = <sidebarWali />;
    // }else if (role === 4) {
    //     sidebarComponent = <sidebarSiswa />;
    // }  else {
        sidebarComponent = <sidebarAdmin />;
    // }
  return (
    <React.Fragment>
        <Navbars/>
        <div className="columns mt-6">
            <div className="column is-2">
                {sidebarComponent}
            </div>
            <column className="has-background-light">
                <main>{children}</main>
            </column>
        </div>
    </React.Fragment>
  )
}

export default Layout