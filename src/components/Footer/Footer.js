/** @format */

import React from 'react';
import { FaWhatsapp, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { logo } from '../../assets/index';

const Footer = () => {
  const handleIconClick = () => {
    window.open('https://www.youtube.com/@qhseacademieandconsulting', '_blank');
  };
  const handleIconClick2 = () => {
    window.open(
      'https://www.linkedin.com/in/ing-yvan-watbo-%E2%9C%85/',
      '_blank'
    );
  };
  const handleIconClick3 = () => {
    window.open('https://wa.me/+237694289819', '_blank');
  };
  return (
    <div className='w-full py-2 h-auto  grid grid-cols-1 md:grid-cols-2  gap-8'>
      <div className='w-full h-full flex flex-row gap-8'>
        <img className='w-35 ' src={logo} alt='logo' />
        <div className='flex gap-4 pt-5'>
          <span className='bannerIcon' onClick={handleIconClick3}>
            <FaWhatsapp />
          </span>
          <span className='bannerIcon' onClick={handleIconClick}>
            <FaYoutube />
          </span>
          <span className='bannerIcon' onClick={handleIconClick2}>
            <FaLinkedinIn />
          </span>
        </div>
      </div>
      <div className='w-full h-full'>
        <h3 className='text-xl uppercase text-designColor tracking-wider'>
          Quick Link || Ressources
        </h3>
        <ul className='flex flex-row gap-4 font-titleFont font-medium py-6 overflow-hidden'>
          <li>
            <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
              About
            </span>
          </li>
          <li>
            <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
              Portfolio
            </span>
          </li>
          <li>
            <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
              Services
            </span>
          </li>
          <li>
            <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
              Blog
            </span>
          </li>
          <li>
            <span className='w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer'>
              Contact
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
