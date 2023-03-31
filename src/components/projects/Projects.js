/** @format */

import React from 'react';
import Title from '../layouts/Title';
import { Fade } from 'react-awesome-reveal';
import {
  projectOne,
  projectTwo,
  projectThree,
  projectFour,
  projectFive,
  projectSix,
} from '../../assets/index';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  const handleIconClick = () => {
    window.open('https://ntouchi-exotic.vercel.app/', '_blank');
  };
  const handleIconClick2 = () => {
    window.open('https://www.qhseacademieandconsulting.com/store', '_blank');
  };
  const handleIconClick3 = () => {
    window.open('https://www.qhseacademieandconsulting.com/', '_blank');
  };

  return (
    <Fade direction='left'>
      <section
        id='projects'
        className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center items-center text-center'>
          <Title
            title='VISITEZ MON PORTFOLIO ET FAITES MOI UN RETOUR'
            des='MES PROJETS'
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
          <ProjectsCard
            title='Ecommerce Website'
            des="Il s'agit d'un site web de vente en ligne où les utilisateurs peuvent parcourir une sélection de produits et effectuer des achats en ligne en utilisant le système de paiement Stripe. Le site est conçu pour offrir une expérience utilisateur fluide et conviviale, avec des fonctionnalités telles que la recherche de produits, le filtrage par catégorie, l'ajout au panier et le paiement en un clic. Le système de gestion de contenu permet également aux propriétaires de boutique de gérer facilement leur inventaire, de suivre les commandes et les expéditions, ainsi que de communiquer avec les clients."
            src={projectOne}
            click={handleIconClick}
          />
          <ProjectsCard
            title='application web Safety'
            des="Il s'agit d'une application web dédiée à la santé et à la sécurité au travail qui permet de faciliter la gestion des risques professionnels et des incidents. Elle offre différentes fonctionnalités telles que la gestion des accidents, la planification des inspections de sécurité, la gestion des formations, la surveillance de l'état de santé des employés, la gestion des équipements de protection individuelle, la veille réglementaire, etc. Elle permet également d'analyser les données collectées pour améliorer la performance en matière de santé et sécurité au travail."
            src={projectTwo}
            click={handleIconClick2}
          />
          <ProjectsCard
            title='Tableau de Bord Finance'
            des="Le tableau de bord pour le suivi des finances est un outil de gestion qui permet de suivre et d'analyser les performances financières d'une entreprise en temps réel. Il rassemble des données financières telles que les ventes, les bénéfices, les coûts, les marges, les flux de trésorerie, les dettes, etc. Les informations sont présentées de manière claire et concise, sous forme de graphiques, de diagrammes et de tableaux, ce qui facilite la prise de décision rapide et éclairée. Le tableau de bord peut être personnalisé en fonction des besoins de l'entreprise ."
            src={projectThree}
            click={handleIconClick2}
          />
          <ProjectsCard
            title='Site web vitrine & ecommerce'
            des=" un site web qui présente une entreprise, ses produits et services, ainsi que des informations pratiques à ses visiteurs. Il permet également de vendre des produits en ligne en intégrant des fonctionnalités d'achat en ligne sécurisées. Le site web est conçu pour offrir une expérience utilisateur optimale et pour attirer des clients potentiels grâce à son design et son contenu accrocheur."
            src={projectFour}
            click={handleIconClick3}
          />
          <ProjectsCard
            title='Tableau de Bord des ventes'
            des="Un tableau de bord des ventes est un outil de pilotage permettant de suivre l'activité commerciale d'une entreprise. Il présente sous forme graphique des indicateurs clés tels que le chiffre d'affaires, le nombre de commandes, le taux de conversion, le panier moyen, etc. Il permet ainsi de suivre l'évolution des ventes au fil du temps et d'identifier rapidement les tendances et les opportunités d'amélioration."
            src={projectFive}
            click={handleIconClick2}
          />
          <ProjectsCard
            title='Tableau de Bord RH'
            des="Un tableau de bord RH est un outil de suivi des indicateurs RH. Il permet de mesurer la performance de la fonction RH en suivant des indicateurs clés tels que le taux de turnover, le coût d'embauche, le taux d'absentéisme, le nombre de jours de formation, etc. Ce tableau de bord permet aux responsables RH de prendre des décisions éclairées et d'ajuster leur stratégie pour améliorer l'efficacité de la fonction RH."
            src={projectSix}
            click={handleIconClick2}
          />
        </div>
      </section>
    </Fade>
  );
};

export default Projects;
