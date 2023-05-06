import { Component } from '@angular/core';

import { HomeContent } from "../../../assets/models/models";
import { HOME_CONTENT_EN } from 'src/assets/db/en/components/home';
// @ts-ignore
import Typewriter from 't-writer.js';
import { HOME_CONTENT_FR } from 'src/assets/db/fr/components/home';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  language: string = '';

  EN_content_home: HomeContent = HOME_CONTENT_EN;
  FR_content_home: HomeContent = HOME_CONTENT_FR;


  page: HomeContent = HOME_CONTENT_EN;

  constructor(private languageService: LanguageService) {

  }

  ngOnInit(): void {

    //TYPEWRITER CODE
    const target1 = document.querySelector('.tw1')
    const target2 = document.querySelector('.tw2')

    const writer1 = new Typewriter(target1, {
      typeSpeed: 60,
      typeColor: 'white',
      cursorColor: 'white'
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 50,
      typeColor: 'white',
      cursorColor: 'white'
    });

    //LANGUAGE
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_home;
      } else {
        this.page = this.FR_content_home;
      }
      writer1
        .type(this.page.subtitles[0]) // Powering
        .removeCursor()
        .then(writer2.start.bind(writer2))
        .start();

      writer2
        .rest(250)
        .type(this.page.subtitles[1])
        .rest(800)
        .clear()
        .type(this.page.subtitles[2])
        .rest(800)
        .clear()
        .type(this.page.subtitles[3])
        .rest(800)
        .clear()
        .type(this.page.subtitles[4])
        .rest(800)
        .clear()
        .type(this.page.subtitles[5])
        .rest(1500)
        .clear()
        .then(writer1.start.bind(writer1));

    });


    /*
    //TYPEWRITER CODE
    const target1 = document.querySelector('.tw1')
    const target2 = document.querySelector('.tw2')

    const writer1 = new Typewriter(target1, {
      typeSpeed: 60,
      typeColor: 'white',
      cursorColor: 'white'
    });

    const writer2 = new Typewriter(target2, {
      typeSpeed: 60,
      typeColor: 'white',
      cursorColor: 'white'
    });

    writer1
      .type(this.page.subtitles[0]) // Powering
      .removeCursor()
      .then(writer2.start.bind(writer2))
      .start();

    writer2
      .rest(250)
      .type(this.page.subtitles[1])
      .rest(800)
      .clear()
      .type(this.page.subtitles[2])
      .rest(800)
      .clear()
      .type(this.page.subtitles[3])
      .rest(800)
      .clear()
      .type(this.page.subtitles[4])
      .rest(800)
      .clear()
      .type(this.page.subtitles[5])
      .rest(1500)
      .clear()
      .then(writer1.start.bind(writer1));
      */
  }



}
