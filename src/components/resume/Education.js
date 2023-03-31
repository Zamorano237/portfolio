/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'>
      {/* part one */}
      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2000 - 2020</p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Formation Académique
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Master Professionnel en QSE '
            subTitle='Université de Douala  (2018 - 2020)'
            result='Bien'
            des=" J'ai appris à améliorer la qualité, la sécurité et l'environnement, évaluer les risques et suivre les performances. Cette formation est un véritable atout dans mon parcours"
          />
          <ResumeCard
            title='Licence Professionnelle en Techniques des Laboratoires'
            subTitle='Université de Douala  (2017 - 2018)'
            result='Bien'
            des="Grâce à cette formatin j'ai pu savoir comment utiliser des équipements de laboratoire, comment effectuer des analyses et  interpréter les résultats afin de donner un diagnostic."
          />
          <ResumeCard
            title='Baccalauréat Scientifique (D)'
            subTitle='College la Perfection (2013 - 2014)'
            result='Assez-Bien'
            des=" J'ai appris à développer des compétences analytiques et de résolution de problèmes, à travailler en équipe et à être rigoureux dans mon travail."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2018 - 2023</p>
          <h2 className='text-3xl md:text-4xl font-bold'>
            Certifications & Attestations
          </h2>
        </div>
        <div className='mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Développement Full Stack JS'
            subTitle='OPENCLASSROOMS  - (2021 - Présent)'
            result='France  '
            des='Créez des sites Web avec HTML5 et CSS3 | Formation sur JavaScript | Création des applications Full Stack avec Node.JS, Express et MongoDB | Formation sur React-JS'
          />
          <ResumeCard
            title='Environnement et Developpement durable'
            subTitle='Institut de la Francophonie pour le Développement Durable - (Mai - Septembre 2020)'
            result='Québec'
            des="Droit Et Protection De L'environnement | Économie Et Gestion De L'environnement Et Des Ressources Naturelles "
          />
          <ResumeCard
            title='Certifications QHSE'
            subTitle='IC CANADA, HOLISTIC QHSE, INRS, THE KNIGHTS SAFTY '
            result='Divers'
            des='Approche Qualité ISO 9001 V 2015 ,Conception des Tableaux de Bord et Outils de Pilotage de la Performance,La Gestion du Risque Chimique, Audits Internes'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
