/** @format */

import React from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import { FaMobile, FaGlobe } from 'react-icons/fa';
import { SiProgress, SiAntdesign } from 'react-icons/si';
import Title from '../layouts/Title';
import Card from './Card';
const Features = () => {
  return (
    <section
      id='features'
      className='w-full py-20 border-b-[1px] border-b-black'>
      <Title title='Services' des='Mon Expertise' />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-12'>
        <Card
          title='Tableaux de Bord'
          des="Je fournis une expertise professionnelle en matière de formation et d'accompagnement pour la création de tableaux de bord de pilotage de la performance, visant à aider les entreprises à améliorer leur performance et à atteindre leurs objectifs stratégiques."
        />
        <Card
          title='Microsoft Office'
          des='Je fourni une formation pratique et personnalisée pour aider les professionnels à maximiser leur productivité et à atteindre leurs objectifs. Mon approche interactive et adaptée à chaque apprenant garantit des résultats concrets et une utilisation optimale des outils de la suite Office.'
          icon={<AiFillAppstore />}
        />
        <Card
          title='Conseil en QHSE'
          des="j'accompagne les entreprises dans la mise en place de leur système QHSE. Je suis fier de proposer des stratégies claires et pragmatiques pour optimiser la performance de mes clients tout en renforçant leur engagement en faveur de l'excellence opérationnelle."
          icon={<SiProgress />}
        />
        <Card
          title='coachings personnalisés'
          des="Je propose des coachings personnalisés sur demande, pour aider mes clients à atteindre leurs objectifs spécifiques. Que ce soit  en matière de développement web, QHSE, RSE ou Tableaux de Bord, je concois un plan d'action sur mesure et les aider à réaliser leur plein potentiel."
          icon={<FaMobile />}
        />
        <Card
          title='Conseil en RSE'
          des="j'ai à cœur d'accompagner les entreprises dans leur transition vers des pratiques plus responsables. Je propose des conseils personnalisés  pour améliorer leur impact social, environnemental et économique et je guide mes clients dans leur démarche de développement durable."
          icon={<SiAntdesign />}
        />
        <Card
          title='Developpement Web'
          des="J'accompagne les entreprises dans la création de leurs sites et applications web pour leur permettre de tirer pleinement parti des avantages de la technologie numérique en fournissant des solutions de pointe et d'aider mes clients à atteindre leurs objectifs commerciaux en ligne."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
