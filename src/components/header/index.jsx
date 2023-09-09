import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { VscChevronDown } from "react-icons/vsc";

import './styles.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-title'>Charity Profile</div>
        <div className='header-actions'>
            <div className='ha-btn action-dropdown'>
                    <div className='ha-drop-text'>
                        The Sample Family Fund
                    </div>
                    <VscChevronDown/>
            </div>
            <div className='ha-btn'>
                <a className='action' href="http://www.dummy.com/notification">
                    <IoNotificationsOutline/>
                </a>
            </div>
            <div className='ha-btn'>
                <a className='action' href="http://www.dummy.com/search">
                    <CiSearch/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header;