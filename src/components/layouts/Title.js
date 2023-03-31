/** @format */

import React from 'react';
import { Fade } from 'react-awesome-reveal';
const Title = ({ title, des }) => {
  return (
    <Fade direction='left'>
      <div className='flex flex-col gap-4 font-titleFont mb-14'>
        <h3 className='text-xl font-bold uppercase text-designColor tracking-wide'>
          {title}
        </h3>
        <h1 className='text-4xl md:text-5xl text-gray-300 font-bold capitalize'>
          {des}
        </h1>
      </div>
    </Fade>
  );
};

export default Title;
