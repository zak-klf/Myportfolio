import { Component, HostListener } from '@angular/core';
import { CloudData, CloudOptions, TagCloudComponent, ZoomOnHoverOptions } from 'angular-tag-cloud-module/public-api';
import { SkillContent, SkillList } from 'src/assets/models/models';

import { SKILL_CONTENT_EN } from 'src/assets/db/en/components/skills';
import { SKILL_CONTENT_FR } from 'src/assets/db/fr/components/skills';
import { LanguageService } from 'src/app/services/language.service';


declare function TagCloud(div: any, tags: any, options: any): any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  language: string = '';

  EN_content_skill: SkillContent = SKILL_CONTENT_EN;
  FR_content_skill: SkillContent = SKILL_CONTENT_FR;

  page:SkillContent = SKILL_CONTENT_EN;

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    width: 0.85,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    height: 0.85,
    overflow: false,
  };

  zoomOnHoverOptions: ZoomOnHoverOptions = {
    scale: 1.15, // Elements will become 130 % of current zize on hover
    transitionTime: 0.4, // it will take 1.2 seconds until the zoom level defined in scale property has been reached
    delay: 0 // Zoom will take affect after 0.8 seconds
  };

  data: CloudData[] = [];

  scrollToTag(clicked: CloudData) {
    // Get the text of the clicked cloud
    const clickedTag = clicked.text;

    // Find the element with the matching id
    const element = document.getElementById(clickedTag);

    // Scroll the element into view
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Store the original background color
      const originalBackgroundColor = element.style.backgroundColor;

      // Blink animation
      const blinkDuration = 500; // in milliseconds
      element.style.backgroundColor = 'white';
      element.style.color = 'rgba(11, 14, 30, 1)';
      // add transition effect to the color and background-color properties
      element.style.transition = "color 0.25s ease, background-color 0.45s ease";
      setTimeout(() => {
        element.style.backgroundColor = originalBackgroundColor;
        element.style.color = ''; // restore the original color
      }, blinkDuration);
    }
  }

  constructor(private languageService: LanguageService) {
    
  }

  ngOnInit() {
    //LANGUAGE
    this.languageService.language$.subscribe(language => {
      this.language = language;
      if (language === 'en') {
        this.page = this.EN_content_skill;
      } else {
        this.page = this.FR_content_skill;
      }
    });

    this.data = this.page.skillList.map((skill_list: SkillList) => ({
      text: skill_list.name,
      weight: Math.floor(Math.random() * 6) + 5,
      color: 'white'
    }));
  }

}
