import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.css']
})
export class ExperienceBoxComponent {
  @Input()  title!:string;
  @Input()  periode!:string;
  @Input()  description!:string[];

}
