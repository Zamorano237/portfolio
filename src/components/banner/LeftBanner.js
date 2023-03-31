/** @format */

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import {
  FaInternetExplorer,
  FaYoutube,
  FaLinkedinIn,
  FaReact,
  FaMicrosoft,
} from 'react-icons/fa';

import { SiTailwindcss } from 'react-icons/si';
import { AiFillDashboard } from 'react-icons/ai';
import { Fade } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';
const LeftBanner = () => {
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
    window.open('https://qhseacademieandconsulting.com/', '_blank');
  };

  const [text] = useTypewriter({
    words: [
      'Ingénieur QHSE.',
      'Développeur Full Stack JS.',
      'Consultant-Formateur QHSE.',
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
      <div className='flex flex-col gap-5'>
        <Fade direction='left'>
          <h4 className=' text-lg font-normal'>BIENVENUE DANS MON PORTFOLIO</h4>
          <h1 className=' text-5xl font-bold text-white'>
            Hi, Je suis{' '}
            <span className='text-designColor capitalize'>Yvan WATBO</span>
          </h1>
          <h2 className='text-4xl font-bold text-white'>
            <span>{text}</span>
            <Cursor
              cursorBlinking='false'
              cursorStyle='|'
              cursorColor='#ff014f'
            />
          </h2>
          <p className='text-base font-bodyFont leading-6 tracking-wide'>
            Ingénieur QHSE et Développeur Full Stack JS passionné par
            l'accompagnement des entreprises pour garantir leur réussite. Mon
            expertise exceptionnelle en matière de QHSE et developpement Web,
            associée à mon savoir-faire en conception des tableaux de bord, me
            permet de fournir une aide précieuse aux entreprises dans leur lutte
            pour l'amélioration continue de leur performance.
          </p>
        </Fade>
      </div>
      <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
        <Zoom>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Retrouvez-moi sur
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon' onClick={handleIconClick3}>
                <FaInternetExplorer />
              </span>
              <span className='bannerIcon' onClick={handleIconClick}>
                <FaYoutube />
              </span>
              <span className='bannerIcon' onClick={handleIconClick2}>
                <FaLinkedinIn />
              </span>
            </div>
          </div>
          <div>
            <h2 className='text-base uppercase font-titleFont mb-4'>
              Meilleures Performances
            </h2>
            <div className='flex gap-4'>
              <span className='bannerIcon'>
                <FaReact />
              </span>
              <span className='bannerIcon'>
                <AiFillDashboard />
              </span>
              <span className='bannerIcon'>
                <SiTailwindcss />
              </span>
              <span className='bannerIcon'>
                <FaMicrosoft />
              </span>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default LeftBanner;
