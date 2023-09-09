import React from 'react'
import Sidebar from '../components/sidebar';

import './styles.css';

const Layout = () => {
    return (
        <div className='layout-container'>
            <div className='l-left'>
                <Sidebar/>
            </div>
            <div className='l-right'></div>
        </div>
    )
}

export default Layout;