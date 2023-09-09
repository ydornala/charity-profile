import React from 'react';
import ReactPlayer from 'react-player'

import './styles.css';

const abouts = [{
    text: 'Lorem Ipsum is simply dummy text',
}, {
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}, {
    text: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book    Lorem Ipsum is simply dummy text'
}]

const Content = () => {
    return (
        <div className='content'>
            <div className='c-row'>
                <div className='c-left'>
                    <div className='card video-info'>
                        <div className='vi-row'>
                            <div className='vi-title'>
                                Videos block
                            </div>
                            <div className='video-player'>
                                <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            </div>
                        </div>
                        <div className='vi-row'>
                            <div className='vi-title'>
                                About us:
                            </div>
                            <div className='about-list'>
                                <ul className='abouts'>
                                    {abouts.map((about, i) => {
                                        return <li className='about-item'>{about.text}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <div className='card contact-info'>
                        <div className='ci-title'>Contact Infomation</div>
                        <div className='ci-content'>
                            <div className='ci-content-row'>
                                <div>icon</div>
                                <div>
                                    Chino Valley Community Church 14601 Peyton DrChino Hills, CA 91709
                                </div>
                            </div>
                            <div className='ci-content-row'>
                                <div>icon</div>
                                <div>
                                    909-606-4848
                                </div>
                            </div>
                            <div className='ci-content-row'>
                                <div>icon</div>
                                <div>
                                    cvcchurch.org
                                </div>
                            </div>
                            <div className='ci-content-row'>
                                <div>t-icon</div>
                                <div>f-icon</div>
                                <div>i-icon</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;