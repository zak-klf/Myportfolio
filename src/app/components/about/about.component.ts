import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { ABOUT_CONTENT_EN } from 'src/assets/db/en/components/about';
import { ABOUT_CONTENT_FR } from 'src/assets/db/fr/components/about';
import { AboutContent } from 'src/assets/models/models';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  EN_content_about: AboutContent = ABOUT_CONTENT_EN;
  FR_content_about: AboutContent = ABOUT_CONTENT_FR;
  language: string = '';
  page: AboutContent = ABOUT_CONTENT_EN;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {

    //LANGUAGE
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_about;
      } else {
        this.page = this.FR_content_about;
      }
    });
  }
}
