import React from 'react';
import { ReactSVG } from 'react-svg';

import Button from '../button';
import './styles.css';
import Avatar from '../avatar';

import HomeIcon from '../../assets/icons/home.svg';
import SendIcon from "../../assets/icons/send.svg";
import GiveIcon from '../../assets/icons/give.svg';
import Favicon from '../../assets/icons/favorites.svg';
import ActivityIcon from "../../assets/icons/group.svg";
import LegacyIcon from '../../assets/icons/frame.svg';
import LogoutIcon from '../../assets/icons/logout.svg';

const menus = [{
    icon: <ReactSVG src={HomeIcon}/>,
    label: 'Home',
    link: 'http://www.dummy.com'
},{
    icon: <ReactSVG src={SendIcon}/>,
    label: 'Grant',
    link: 'http://www.dummy.com'
},{
    icon: <ReactSVG src={GiveIcon}/>,
    label: 'Give',
    link: 'http://www.dummy.com'
},{
    icon: <ReactSVG src={Favicon}/>,
    label: 'Favorites',
    link: 'http://www.dummy.com'
},{
    icon: <ReactSVG src={ActivityIcon}/>,
    label: 'Activity',
    link: 'http://www.dummy.com'
},{
    icon: <ReactSVG src={LegacyIcon}/>,
    label: 'Legacy',
    link: 'http://www.dummy.com'
}];

const belowMenu = [{
    icon: <ReactSVG src={LogoutIcon}/>,
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
                        <Button className="simple">Edit</Button>
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