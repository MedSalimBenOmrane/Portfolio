import { Component } from '@angular/core';
import { Expinfo } from 'src/app/model/exp_info';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent {
  exps: Expinfo[];
  constructor() {
    this.exps = [
      new Expinfo(
        'Luxolor Boats (PART TIME JOB)',
        '2023 - Present',
        [
          'Production Methods Engineer: Defines, organizes, and optimizes processes and production resources for an industrial site.'
        ]
      ),
      new Expinfo(
        'INSAT - Engineering Degree ',
        '2020-2025',
        [
          'Engineering Degree in Computer networks and telecommunications.'
        ]
      ),
      new Expinfo(
        'AI and Biotechnology Intern/Web Developer- Talan Tunisie International',
        'Summer-2024',
        [
          'Conceived a non-invasive cancer detection solution using AI and sonogenetics, deployed on an Angular platform with AI models integrated via Flask for personalized care.',
          'Designed a UNet-based model for tumor segmentation in MRI images, achieving an average IoU/DICE score of 98.823 by leveraging a U-shaped architecture for precise size and location determination.',
          'Implemented a virtual assistant to respond to specific biology-related questions and provide real-time assistance.'
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Computer Science.'
        ]
      ),
      new Expinfo(
        'GAME Developer Internship - Lanterns Studios',
        'Summer-2023',
        [
          'Developed a dynamic 3D Tic tac toe multiplayer game using Unreal Engine 5.'
        ]
      )
    ];
  }
}
