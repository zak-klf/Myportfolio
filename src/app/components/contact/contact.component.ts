import { Component,ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { CONTACT_CONTENT_EN } from 'src/assets/db/en/components/contact';
import { CONTACT_CONTENT_FR } from 'src/assets/db/fr/components/contact';
import { ContactContent } from 'src/assets/models/models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  language: string = '';

  EN_content_contact: ContactContent = CONTACT_CONTENT_EN;
  FR_content_contact: ContactContent = CONTACT_CONTENT_FR;

  page: ContactContent = CONTACT_CONTENT_EN;


  constructor(private elementRef: ElementRef, private languageService: LanguageService) {}

  copyToClipboard() {
    const emailText = document.querySelector('.email-text');
    if (emailText) {
      navigator.clipboard.writeText(emailText.innerHTML).then(() => {
        const emailSection = document.querySelector('.email');
        if (emailSection) {
          emailText.classList.add('active');
          console.log(emailText.classList);
          setTimeout(() => {
            emailText.classList.remove('active');
          }, 2500);
        }
      });
    }
  }

  ngOnInit() {
    //LANGUAGE
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_contact;
      } else {
        this.page = this.FR_content_contact;
      }
    });
  }
}
