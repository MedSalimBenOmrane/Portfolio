import { Component, Input } from '@angular/core';
import { project } from 'src/app/model/project';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()  project!:project;

}
