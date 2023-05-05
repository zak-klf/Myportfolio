import { Component, HostListener } from '@angular/core';
import { HEADER_CONTENT_EN } from 'src/assets/db/en/components/header';
import { HEADER_CONTENT_FR } from 'src/assets/db/fr/components/header';
import { HeaderContent } from 'src/assets/models/models';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {


  EN_content_header:HeaderContent = HEADER_CONTENT_EN;
  FR_content_header:HeaderContent = HEADER_CONTENT_FR;

  isEnglish = false;
  language: string = '';

  page:HeaderContent = HEADER_CONTENT_EN;

  menuAvailable = false;
  isToggled = false;

  constructor(private languageService: LanguageService) {
    this.menuAvailable = window.innerWidth < 768;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.menuAvailable = event.target.innerWidth < 768;
  }
  

  toggleNavbar() {
    this.isToggled = !this.isToggled;
  }

  closeNavbar() {
    this.isToggled = false;
  }

  onChange() {
    const language = this.isEnglish ? 'fr' : 'en';
    this.languageService.setLanguage(language);
  }

  ngOnInit() {
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_header;
      } else {
        this.page = this.FR_content_header;
      }
    });
  }
}

