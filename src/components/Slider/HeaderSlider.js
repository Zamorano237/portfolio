/** @format */

import React from 'react';
import './HeaderSlider.scss';
import { Link } from 'react-router-dom';
import DeliveryImage from '../../assets/images/delivery.png';
import Ban from '../../assets/images/ban.png';

const HeaderSlider = () => {
  return (
    <div className='grid w-[85%] m-auto grid-cols-1 md:grid-cols-2 gap-1 overflow-hidden p-5  md:p-4'>
      <div className='flex-1 flex flex-col items-start  justify-center gap-12 py-3'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-xl text-orange-500 font-semibold'>
            Livraison a domicile
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={DeliveryImage}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

        <p className='text-4xl font-bold tracking-wider text-headingColor md:text-5xl lg:text-5xl'>
          La reférence des produits
          <br />
          <span className='text-orange-600 text-4xl md:text-5xl lg:text-5xl'>
            {' '}
            Exotic Africains,
          </span>
          prés de chez vous
        </p>

        <p className='text-3xl text-color text-left md:text-left md:w-4/5'>
          Bienvenue dans notre boutique en ligne, où vous pourrez explorer une
          collection unique de produits africains authentiques et exotiques.
          Nous sommes fiers d'être reconnus comme un leader dans la vente de
          produits exotiques africains de haute qualité.
        </p>

        <Link
          type='button'
          to={'/cart'}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='max-w-[280px] bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out font-semibold  duration-300 flex justify-center md:justify-self-start hover:scale-105 '>
          Commandez
        </Link>
      </div>

      <div className='p-10 md:pt-10  flex-1 designHomeRight h-full px-2 '>
        <img src={Ban} alt='' />
      </div>
    </div>
  );
};

export default HeaderSlider;
