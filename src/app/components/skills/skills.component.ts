import { Component } from '@angular/core';
import { Skill, Education } from 'src/assets/models/models';


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
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'HTML/CSS', level: 'Intermediate' },
    { name: 'Angular', level: 'Intermediate' },
    { name: 'NodeJS', level: 'Intermediate' },
    { name: 'Express', level: 'Intermediate' },
    { name: 'Bash', level: 'Intermediate' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'Tableau', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'R', level: 'Intermediate' },
    { name: 'DeepLearning(Tensoflow)', level: 'Intermediate' },
    { name: 'NumPy, Matplotlib, Pandas', level: 'Intermediate' },
    { name: 'Logistic/Linear Regressions', level: 'Intermediate' },
    { name: 'Sklearn, StatsModels', level: 'Intermediate' },
    { name: 'PHP', level: 'Intermediate' },
    { name: 'MySQL', level: 'Intermediate' },
    { name: 'Design', level: 'Intermediate' }
  ];

}
