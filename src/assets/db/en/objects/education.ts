import { Education } from "../../../models/models";

export const EDUCATION:Education[] = [
    {
        institute: 'Université Grenoble Alpes IUT2',
        title: 'HND Computer Science',
        courses: [' Object Oriented Programming', ' Web Development', ' Assembly and Machine Languages', ' SQL Databases', ' Android App Development',
            ' Algorithms', ' Statistics', ' Graphs and Languages', ' Networking and security'],
        description: [' Validated my HND in two years ending with a three month internship as a full-stack developper']
    },
    {
        institute: 'Université Paris 8',
        title: 'Bachelor of Science - Computer Science',
        courses: [' Object Oriented Programming', ' Assembly', ' Machine Languages', ' Big Data and Data Mining', ' Introduction to security', ' Interpretation and Compilation', ' Open Source Software Design', ' Psychology'],
        description: ['Graduiting for a Bachelor\'s degree in computer science ending with a 2 to 6 months internship']
    },
    {
        institute: 'Coursera',
        title: 'Google Data Analytics Professional Certificate',
        courses: [' Data Analysis', ' Advanced Spreadsheets', ' SQL(ORACLE) Databases', ' Tableau and Data Visualization', ' R Programming'],
        description: ['Course done on my free time to learn about the fundementals of data analysis and visualization']
    },
    {
        institute: '365 Careers',
        title: 'Data Science Bootcamp',
        courses: [' Probabilities and Statistics', ' Machine Learning', ' Deep Learning with TensorFlow'],
        description: ['Course done on my free time to learn about advanced data science techniques']
    }
];