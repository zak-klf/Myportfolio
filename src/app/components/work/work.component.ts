import { Component } from '@angular/core';
import { Work } from 'src/assets/models/models';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent {

  workExperiences: Work[] = [
    {
      title: 'Full-stack Web Developper - PersonalData.io - Geneva',
      description: [
        'Worked as a full-stack software developper in a start-up company in Geneva that specializes in the management of personnal information on the web.',
        'Developped new features with Python Django, improvements to UI and design, Database improvements in SQL for performance',
        'Set up CI/CD automated testing environment in GitLab'
      ],
      skillsApplied: ['Python','Python Django','SQL','HTML/CSS','Git','CI/CD','Bash']
    },
    {
      title: 'Full-stack Web Developper - SBT Human(s) Matter - Grenoble',
      description: [
        'Worked as full-stack software developper for an internal project in an agile environment',
        'Creation of an Application for an SBT subsidiary to automate the process of creating and monitoring "assessment", a special HR evaluation product',
        'Completion of the project from start to end, from writing the specifications to the realization of the application all in autonomy',
        'Created app using the MEAN Stack (MongoDB, Express, Angular, NodeJS) to create automated scheduling app',
        'The App communicated with a Google Sheets API to automatically update and create an "assessment" from a Sheets file'
      ],
      skillsApplied: ['Angular','MongoDB','JavaScript','HTML/CSS','Git','CI/CD', 'TypeScript','Express','NodeJS']
    },
    {
      title: 'Freelance Work',
      description: [
        'Development of some small scale projects or application updates for small clients',
        'Helped for example with conception, construction and deployment of individual coaching app in Wordpress'
      ],
      skillsApplied: ['Angular','MongoDB','JavaScript','HTML/CSS','Git','CI/CD', 'TypeScript','Express','NodeJS','WordPress']
    }
  ]

}
