/** @format */

import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.5 } }}
      className='py-12 font-titleFont flex gap-20'>
      <div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>2018 - 2022</p>
          <h2 className='text-4xl font-bold'>Expérience en entreprise</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='Care Consulting World '
            subTitle='Consultant -Formateur QHSE - (2021 - 2022)'
            result='Cameroun'
            des="Les missions accomplies comprennent la réalisation d'études de dangers et d'impacts environnementaux, la création d'une application de veille réglementaire QHSE, la réalisation de contrôles d'installations électriques et d'appareils, ainsi que l'accompagnement et la formation des entreprises dans les démarches QHSE"
          />
          <ResumeCard
            title='ASECNA Cameroun '
            subTitle='Stagiaire professionnel QHSE- (09/20 - 12/20)'
            result='Cameroun'
            des="j'ai réalisé des évaluations des risques professionnels et environnementaux, participé à la rédaction de documents relatifs au système QHSE et animé des réunions de sécurité. De plus, j'ai contribué à la mise en place du SME de l'ASECNA Cameroun en rédigeant et soutenant mon mémoire."
          />
          <ResumeCard
            title='IBISS MEDICAL SARL '
            subTitle='Responsable QHSE - (12/2018 - 07/2020)'
            result='Cameroun'
            des="Au cours de mon travail dans cette entreprise, j'ai été chargé de l'élaboration et du pilotage de la politique QHSE de l'entreprise, j'ai établi des programmes de prévention pour réduire les incidents, accidents du travail et maladies professionnelles et j'ai aussi réalisé des audits sur la base de référentiels internes ou externes"
          />
        </div>
      </div>
      <div>
        <div className='flex flex-col gap-4'>
          <p className='text-sm text-designColor tracking-[4px]'>
            2023 - Maintenant
          </p>
          <h2 className='text-4xl font-bold'>Developpement WEB</h2>
        </div>
        <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
          <ResumeCard
            title='NTOUCHI-EXOTIC'
            subTitle='Site de Vente en ligne (2023)'
            result='France'
            des="J'ai créé une boutique en ligne de produits exotiques en utilisant la pile MERN STACK, un ensemble de technologies qui permettent de développer des applications web performantes. La gestion du stock de la boutique est assurée par Firebase, une plateforme de développement mobile et web de Google."
          />
          <ResumeCard
            title='QHSE ACADEMIE'
            subTitle='Site Vitrine et Ecommerce (2023)'
            result='Cameroun'
            des="J'ai créé un site web pour la présentation d'un cabinet et de ses services, ainsi que pour la vente de ses produits en ligne grâce à Stripe comme moyen de paiement. Ce site a été développé en utilisant ReactJS pour le front-end, NodeJS pour le back-end, et Firebase pour le stockage. Le design a été réalisé avec Tailwind CSS ."
          />
          <ResumeCard
            title='QHSE ACADEMIE'
            subTitle='Application WEB Qualité (2023)'
            result='International'
            des="J'ai créé une application web destinée à accompagner les professionnels de la QHSE dans leurs tâches quotidiennes. Avec des fonctionnalités telles que la gestion des incidents, la planification des audits et des formations, le suivi des plans d'action. J'ai utilisé les technologies suivantes : React.js, Node.js, Firebase, Tailwind CSS et MongoDB pour la base de données"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
