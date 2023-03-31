/** @format */

import React from 'react';
import { FaWhatsapp, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
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
    <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-4justify-center'>
      <img
        className='w-full h-64 object-cover rounded-lg mb-2'
        src={contactImg}
        alt='contactImg'
      />
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl font-bold text-white'>Yvan WATBO</h3>
        <p className='text-lg font-normal text-gray-400'>
          Consultant-Formateur || MERN Stack Developer
        </p>
        <p className='text-base text-gray-400 tracking-wide'>
          Si vous cherchez à améliorer votre performance, je suis là pour vous
          aider. Je vous propose une consultation personnalisée pour discuter de
          vos besoins spécifiques et trouver des solutions adaptées à votre
          entreprise.
        </p>
        <p className='text-base text-gray-400 flex items-center gap-1'>
          Phone: <span className='text-lightText'>+237 694289819</span>
        </p>
        <p className='text-base text-gray-400 flex items-center gap-2'>
          Email: <span className='text-lightText'>watboparfait@gmail.com</span>
        </p>
      </div>
      <div className='flex flex-col gap-4'>
        <h2 className='text-base uppercase font-titleFont mb-4'>
          Retrouvez-moi sur:
        </h2>
        <div className='flex gap-4'>
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
    </div>
  );
};

export default ContactLeft;
