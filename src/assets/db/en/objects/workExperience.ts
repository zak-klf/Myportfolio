import { Work } from '../../../models/models';

export const WORK_EXPERIENCE: Work[] = [
    {
        title: 'Full-stack Web Developper - PersonalData.io - Geneva',
        description: [
            'Worked as a full-stack software developper in a start-up company in Geneva that specializes in the management of personnal information on the web.',
            'Developped new features with Python Django, improvements to UI and design, Database improvements in SQL for performance.',
            'Set up CI/CD automated testing environment in GitLab.'
        ],
        skillsApplied: ['Python', 'Python Django', 'SQL', 'HTML/CSS', 'Git', 'CI/CD', 'Bash'],
        workType: 'professional',
        link: null
    },
    {
        title: 'Full-stack Web Developper - SBT Human(s) Matter - Grenoble',
        description: [
            'Worked as full-stack software developper for an internal project in an agile environment.',
            'Creation of an Application for an SBT subsidiary to automate the process of creating and monitoring "assessment", a special HR evaluation product.',
            'Completion of the project from start to end, from writing the specifications to the realization of the application all in autonomy.',
            'Created app using the MEAN Stack (MongoDB, Express, Angular, NodeJS) to create automated scheduling app.',
            'The App communicated with a Google Sheets API to automatically update and create an "assessment" from a Sheets file.'
        ],
        skillsApplied: ['Angular', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Git', 'CI/CD', 'TypeScript', 'Express', 'NodeJS'],
        workType: 'professional',
        link: null
    },
    {
        title: 'Freelance Work',
        description: [
            'Development of some small scale projects or application updates for small clients.',
            'Helped for example with conception, construction and deployment of individual coaching app in Wordpress.'
        ],
        skillsApplied: ['Angular', 'MongoDB', 'JavaScript', 'HTML/CSS', 'Git', 'CI/CD', 'TypeScript', 'Express', 'NodeJS', 'WordPress'],
        workType: 'professional',
        link: null
    },
    {
        title: 'Data Science applied to financial markets in Python',
        description: [
            'Some attempts at analyzing the financial markets with Data Science in Python using Jupyter Notebooks.',
            'Currently applying what I\'ve learnt in the MIT Course on financial markets in asset valuation, portfolio theory.',
            'This will soon be updated, I intend to progressively work on more complex subjects such as DCF models, Monte-Carlo simulations, Derivatives pricing and complex quantitive analysis.',
            'I usually try to implement in some way the things I learn in finance books or in courses I follow.',
            'The github page containing everything I work on in finance will regularly be updated.'
        ],
        skillsApplied: ['Python', 'Jupyter Notebooks', 'Data Science', 'Asset Pricing', 'Probabilities and statistics', 'Linear and Logistic regressions'],
        workType: 'personal',
        link: null
    },
    {
        title: 'My personal Portfolio website (here)',
        description: [
            'Indeed, the site you are currently visiting has been built by me, it has the goal to present who I am and what I can do, hopefully in the litteral sense.',
            'The site is built with Angular from scratch using no CSS frameworks and as little packages as possible.',
            'It is built with SCSS instead of regular CSS to make it more readable, and built to be fully responsive.',
            'No Databases are currently used to make the site as cost effective and possible and to be able to host it on github, JSON files are used instead as of now.',
            'The wesbite supports multilanguage functionnality (EN and FR as of today).',
            'My github page contains the source code of the project, link below.'
        ],
        skillsApplied: ['Angular', 'TypeScript', 'SCSS', 'Responsive Design', 'git', 'HTML',],
        workType: 'personal',
        link: null
    },
    {
        title: 'Software Projects & Miscellaneous',
        description: [
            'Some of thing I try to experiment with, sometimes new frameworks, technologies.',
            'Since I really like analytics and football, I hope to work soon on some data analysis related to football.',
            'I intend to do some work on tactical analysis, player scouting, performance analysis etc... all of which are coming soon!'
        ],
        skillsApplied: ['Python', 'Jupyter Notebooks', 'Data Science', 'Asset Pricing', 'Probabilities and statistics', 'Javascript', 'R', 'Deeplearning', 'PHP'],
        workType: 'personal',
        link: null
    }
];