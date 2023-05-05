import { Education } from "../../../models/models";

export const FORMATIONS:Education[] = [
    {
        institute: 'Université Grenoble Alpes IUT2',
        title: 'DUT Informatique',
        courses: [' Programmation Orientée Objet', ' Développement Web', ' Assembleur et langages Machine', ' Bases de données SQL', ' Développement applications Android',
            ' Algorithmes', ' Statistiques', ' Langages et Graphes', ' Sécurité & Réseaux'],
        description: [' Validation de mon DUT en deux ans terminé par un stage de 3 mois en tant que développeur web']
    },
    {
        institute: 'Université Paris 8',
        title: 'Licence Informatique',
        courses: [' Programmation Orientée Objet', ' Assembleur', ' Langages Machines', ' Big Data et Data Mining', ' Introduction à la sécurité', ' Interprétation et Compilation', ' Développement de logiciels OpenSource', ' Psychologie'],
        description: ['Validation de la licence avec un stage de 2 à 6 mois']
    },
    {
        institute: 'Coursera',
        title: 'Google Data Analytics Professional Certificate',
        courses: [' Analyse des données', ' Tableur avancé', ' Bases de données SQL(ORACLE)', ' Tableau and Visialisation des données', ' Programmation R'],
        description: ['Certification effectuée dans mon temps libre pour aprrendre les fondamentaux de l\'analyse et la visualisation des données']
    },
    {
        institute: '365 Careers',
        title: 'Data Science Bootcamp',
        courses: [' Probabilités et Statistiques', ' Machine Learning', ' Deep Learning avec TensorFlow'],
        description: ['Certification effectuée dans mon temps libre pour apprendre les fondamentaux de la science des données avancée et des diverses techniques modernes']
    }
];