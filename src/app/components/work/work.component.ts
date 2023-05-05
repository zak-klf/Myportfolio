import { Component } from '@angular/core';
import { Work, WorkContent } from 'src/assets/models/models';

import { WORK_EXPERIENCE } from 'src/assets/db/en/objects/workExperience';
import { WORK_CONTENT_EN } from 'src/assets/db/en/components/work';
import { WORK_CONTENT_FR } from 'src/assets/db/fr/components/work';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  language: string = '';

  EN_content_work: WorkContent = WORK_CONTENT_EN;
  FR_content_work: WorkContent = WORK_CONTENT_FR;

  page: WorkContent = WORK_CONTENT_EN;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    //LANGUAGE
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_work;
      } else {
        this.page = this.FR_content_work;
      }
    });
  }

}
