/** @format */

import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      <div className='w-full lgl:w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            compétences
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>QHSE-RSE</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Mise en place des certifications ISO 9001, ISO 14001 & ISO 45001
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Réalisation des études de dagers, étude d'impact & Plan d'urgence
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Montage de Tableaux de bord et outils de pilotage de la
              performance
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[100%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>100%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Assurer la veille règlementaire QHSE
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>70%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Piloter la politique QHSE de l’entreprise,
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>85%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Mise en œuvre un plan de gestion des eaux usées
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Analyses quantitatives et qualitatives des échantillons
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>95%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>

      <div className='w-full lgl:w-1/2'>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px] uppercase'>
            compétences
          </p>
          <h2 className='text-3xl md:text-4xl font-bold'>Développement Web</h2>
        </div>
        <div className='flex flex-col gap-6'>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>React JS</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>HTML 5</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>95%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>CSS3</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>80%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>75%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>NODE JS</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[83%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>83%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>Mongo DB</p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>90%</span>
              </motion.span>
            </span>
          </div>
          <div className='overflow-x-hidden'>
            <p className='text-sm uppercase font-medium'>
              Microsoft (Excel, Word & PowerPoint){' '}
            </p>
            <span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-[98%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                <span className='absolute -top-7 right-0'>98%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
