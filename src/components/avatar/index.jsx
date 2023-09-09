import React from 'react';

import './styles.css';

const Avatar = (props) => {
    const { src } = props;
  return (
    <img src={src} className='avatar' alt="avatar"/>
  )
}

export default Avatar;