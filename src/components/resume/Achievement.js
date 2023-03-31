/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className='py-12 font-titleFont flex gap-20'>
      <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2020 - Maintenant
          </p>
          <h2 className='text-4xl font-bold'>Accompagnements</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='ITS Cameroun SARL '
            subTitle='Accompagnement ICC.'
            result='Success'
            des="J'ai apporté un soutien à ITS Cameroun SARL pour la préparation et la réussite de l'Audit ICC (Inspection de conformité des Contractants) de TOTAL."
          />
          <ResumeCard
            title='KALFRELEC, MSF, BRASSERIE, PAD, PLASTICAM, ...'
            subTitle='Formation et conception des Tableaux de Bord.'
            result='Success'
            des="Grâce à mon expertise et mes compétences, j'ai pu proposer des solutions personnalisées et efficaces en matière de tableaux de bord pour aider ces entreprises à atteindre leurs objectifs."
          />
          <ResumeCard
            title='Autres entreprises(RAW-ACTS, ITS, SOTREAS, BATIPLUS, ...)'
            subTitle='Accompagnement'
            result='Success'
            des="J'ai mis mon expertise à la disposition de plusieurs entreprises pour les accompagner dans la mise en place de systèmes de management, la réalisation d'audits, la sécurité incendie et d'autres prestations."
          />
        </div>
      </div>
      <div>
        <div className='py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2019 - Maintenant
          </p>
          <h2 className='text-4xl font-bold'>Formations</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='QHSE ACADEMIE AND CONSULTING'
            subTitle='Formation en ligne'
            result='Success'
            des='Animation d’une Formation (en ligne) sur la mise en place d’un système de management de la Qualité selon ISO 9001 V 2015 '
          />
          <ResumeCard
            title='QHSE ACADEMIE AND CONSULTING'
            subTitle='Webinar et  formation en présentiel '
            result='Success'
            des='Animation d’un Webinar et d’une formation en présentiel sur la thématique « Conception des Tableaux de bord et outils de pilotage de la Performance »'
          />
          <ResumeCard
            title='CARE CONSULTING WORLD'
            subTitle='Autres Formations'
            result='Success'
            des="J'ai donné des formations sur la sécurité et la santé au travail, la responsabilité sociétale des entreprises (RSE) ainsi que sur la suite bureautique Office."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
