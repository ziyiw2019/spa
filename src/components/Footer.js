import React from 'react';

import LogoWhite from '../assets/img/logo-white.png'

const Footer = () => {
  return <div className='bg-primary py-12'>
  <div className='container mx-auto text-white flex justify-between'>
  <a href='/'>
    <img src={LogoWhite} alt=""/>
  </a>
   
    Copyright &copy; 2024. All rights reserved.
  </div>
  </div>;
};

export default Footer;
