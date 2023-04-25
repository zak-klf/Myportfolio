import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  myData_FR: string[][] = [
    ['Name', 'Zakarya KHELIF'],
    ['Born in', '1997'],
    ['Work Exp', 'près d\'un an d\'expérience cumulée'],
    ['Education', 'Licnence (2023) et DUT (2018)'],
    ['Centres d\'intérêt', 'Finance, Sports, Analyse du sport et de la finance'],
  ];

  myData_EN: string[][] = [
    ['Name', 'Zakarya KHELIF'],
    ['Born in', '1997'],
    ['Work Exp', 'cumulated almost one year'],
    ['Education', 'B.S. (2023) and HND (2018)'],
    ['Interests', 'Finance, Sports, Analytics (in sports and finance)'],
  ];

  aboutMe_EN: string[] = [
    'Hi! I am Zakarya KHELIF, a 25 year old graduating from University Paris 8 with a bachelor in computer science',
    'I have worked in previous roles in software development but I have also developped a very versatile skillset which includes Data Science technologies apart from my software development capabilities, I always spend some of my free time constantly improving and learning new things',
    'Also very passionate about the world of finance, I have followed and finished an open course: 15.401 Finance Theory from MIT',
    'I speak French and English fluently',
    'Always eager to learn, very curious and currently looking for a great opportunity',
  ];

  link_EN: string = 'Let\'s work on something special!';

  aboutMe_FR: string[] = [
    'Bonjour! Je suis Zakarya KHELIF, j\'ai 25 ans et je suis actuellement diplômé de l\'Université Paris 8 en informatique en plus de mon DUT',
    'J\'ai travaillé dans une multitude de rôles en développement informatique, j\'ai par ailleurs pu développer un ensemble de compétences polyvalente contenant la science des données en plus du développement logiciel',
    'Je suis aussi très passioné par la finance de marché, j\'ai par ailleurs suivi le cours 15.401: Finance Theory du MIT et passe une grande partie de mon temps libre à apprendre le plus possible sur ce domaine',
    'Toujours désireux d\'apprendre et naturellement curieux, je suis à la recherche d\'une nouvelle opportunité',
    
  ];

  link_FR: string = 'Travaillons sur quelque chose de spécial!';

}
