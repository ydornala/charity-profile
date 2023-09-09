import React from 'react';
import { GrHomeRounded, GrFavorite } from "react-icons/gr";
import { PiPaperPlaneTiltFill, PiLeafLight } from 'react-icons/pi';
import { FiPlusCircle } from "react-icons/fi";
import { SlPieChart } from "react-icons/sl";
import { IoLogOutOutline } from "react-icons/io5";

import Button from '../button';
import './styles.css';
import Avatar from '../avatar';

const menus = [{
    icon: <GrHomeRounded/>,
    label: 'Home',
    link: 'http://www.dummy.com'
},{
    icon: <PiPaperPlaneTiltFill/>,
    label: 'Grant',
    link: 'http://www.dummy.com'
},{
    icon: <FiPlusCircle/>,
    label: 'Give',
    link: 'http://www.dummy.com'
},{
    icon: <GrFavorite/>,
    label: 'Favorites',
    link: 'http://www.dummy.com'
},{
    icon: <SlPieChart/>,
    label: 'Activity',
    link: 'http://www.dummy.com'
},{
    icon: <PiLeafLight/>,
    label: 'Legacy',
    link: 'http://www.dummy.com'
}];

const belowMenu = [{
    icon: <IoLogOutOutline/>,
    label: 'Logout',
    link: 'http://www.dummy.com'
}]

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='top'>
                <div className='sidebar-title'>
                    <span className='bold'>my</span><span>giving</span>
                </div>
                <div className='sidebar-profile'>
                    <div className='line avatar-wrapper'>
                        <Avatar src="/images/profile.png"/>
                    </div>
                    <div className='line profile-name'>
                        Louis Carter
                    </div>
                    <div className='line profile-edit'>
                        <Button>Edit</Button>
                    </div>
                </div>
                <div className='menu-wrapper'>
                    <ul className='menu'>
                        { menus && menus.map((menu, i) => {
                            return <li className='menu-item'>
                            <a href={menu.link} className='menu-item-anchor'><span className='icon'>{menu.icon}</span> <span className='menu-label'>{menu.label}</span></a>
                            </li>
                        }) }
                    </ul>
                </div>
            </div>
            <div className='bottom'>
            <div className='menu-wrapper'>
                    <ul className='menu'>
                        { belowMenu && belowMenu.map((menu, i) => {
                            return <li className='menu-item'>
                            <a href={menu.link} className='menu-item-anchor'><span className='icon'>{menu.icon}</span> <span className='menu-label'>{menu.label}</span></a>
                            </li>
                        }) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar