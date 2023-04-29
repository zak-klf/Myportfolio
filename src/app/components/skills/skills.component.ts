import { Component, ViewChild, ElementRef } from '@angular/core';
import { Skill, Education } from 'src/assets/models/models';
import { CloudData, CloudOptions, ZoomOnHoverOptions  } from 'angular-tag-cloud-module/public-api';


declare function TagCloud(div: any, tags: any, options: any): any;

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent {

  education: Education[] = [
    {
      institute: 'Université Grenoble Alpes IUT2',
      title: 'HND Computer Science',
      courses: ['Object Oriented Programming', 'Web Development', 'Assembly and Machine Languages', 'SQL Databases', 'Android App Development',
        'Algorithms', 'Statistics', 'Graphs and Languages', 'Networking and security'],
      description: ['Validated my HND in two years ending with a three month internship as a full-stack developper']
    },
    {
      institute: 'Université Paris 8',
      title: 'Bachelor of Science - Computer Science',
      courses: ['Object Oriented Programming', 'Assembly', 'Machine Languages', 'Big Data and Data Mining', 'Introduction to security', 'Interpretation and Compilation', 'Open Source Software Design', 'Psychology'],
      description: ['Graduiting for a Bachelor\'s degree in computer science ending with a 2 to 6 months internship']
    },
    {
      institute: 'Coursera',
      title: 'Google Data Analytics Professional Certificate',
      courses: ['Data Analysis', 'Advanced Spreadsheets', 'Databases', 'Tableau and Data Visualization', 'R Programming'],
      description: ['Course done on my free time to learn about the fundementals of data analysis and visualization']
    },
    {
      institute: '365 Careers',
      title: 'Data Science Bootcamp',
      courses: ['Probabilities and Statistics', 'Machine Learning', 'Deep Learning with TensorFlow'],
      description: ['Course done on my free time to learn about advanced data science techniques']
    }
  ];

  skills: Skill[] = [
    { name: 'JavaScript', level: 'Intermediate', rating: 85 },
    { name: 'HTML/CSS', level: 'Intermediate', rating: 85 },
    { name: 'Angular', level: 'Intermediate', rating: 85 },
    { name: 'NodeJS', level: 'Intermediate', rating: 85 },
    { name: 'Express', level: 'Intermediate', rating: 85 },
    { name: 'Bash', level: 'Intermediate', rating: 85 },
    { name: 'TypeScript', level: 'Intermediate', rating: 90 },
    { name: 'Tableau', level: 'Intermediate', rating: 85 },
    { name: 'Java', level: 'Intermediate', rating: 85 },
    { name: 'Python', level: 'Intermediate', rating: 85 },
    { name: 'R', level: 'Intermediate', rating: 85 },
    { name: 'DeepLearning(Tensoflow)', level: 'Intermediate', rating: 85 },
    { name: 'NumPy, Matplotlib, Pandas', level: 'Intermediate', rating: 85 },
    { name: 'Logistic/Linear Regressions', level: 'Intermediate', rating: 85 },
    { name: 'Sklearn, StatsModels', level: 'Intermediate', rating: 65 },
    { name: 'PHP', level: 'Intermediate', rating: 85 },
    { name: 'MySQL', level: 'Intermediate', rating: 85 },
    { name: 'Design', level: 'Intermediate', rating: 85 }
  ];

  options: CloudOptions = {
    // if width is between 0 and 1 it will be set to the width of the upper element multiplied by the value
    //width: 800,
    // if height is between 0 and 1 it will be set to the height of the upper element multiplied by the value
    //height: 800,
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
    }
  }

  constructor() {
    this.data = this.skills.map((skill: Skill) => ({
      text: skill.name,
      weight: Math.floor(Math.random() * 6) + 5,
      color: 'white'
    }));
  }

}
