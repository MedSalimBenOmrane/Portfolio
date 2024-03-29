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
        'GAME Developer Internship - Lanterns Studios',
        'Summer-2023',
        'Developed a dynamic 3D Tic tac toe multiplayer game using Unreal Engine 5 .'
      ),
      new Expinfo(
        'INSAT - Engineering Degree ',
        '2020-2025',
        'Engineering Degree in Computer networks and telecommunications .'
      ),
      new Expinfo(
        'Luxolor Boats (PART TIME JOB)',
        '2023 - Present',
        'Production Methods Engineer: Defines, organizes, and optimizes processes and production resources for an industrial site .'
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'august -2020',
        'Baccalaureate Degree in Computer Science .'
      ),



    ];
  }
}
