import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  myData: string[][] = [
    ['Name', 'Sundar Pichai'],
    ['DOB', '10/06/1972'],
    ['Work Exp', '25 Years'],
    ['Education', 'M.S (1995)'],
    ['Interests', 'Cricket'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Software Engineer with 25 years of experience in software industry.',
    'Worked as Head of Product Management in Google for various technologies (Google Search Engine, Google Drive, Chrome Browser).',
    'Delivered all product withing deadlines. Always eager to learn new technologies.',
    'Currently, working as CEO of Google Alphabet',
  ];

}
