import React from 'react'
import Sidebar from '../components/sidebar';

import './styles.css';
import Header from '../components/header';

const Layout = () => {
    return (
        <div className='layout-container'>
            <div className='l-left'>
                <Sidebar/>
            </div>
            <div className='l-right'>
                <Header/>
            </div>
        </div>
    )
}

export default Layout;