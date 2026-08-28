import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
@Component({
  selector: 'app-associative-life',
  templateUrl: './associative-life.component.html',
  styleUrls: ['./associative-life.component.css']
})
export class AssociativeLifeComponent {

  // Define new variables
  eventCount: number = 0;  // For realized events
  trainingSessionCount: number = 0;  // For training sessions
  participantCount: number = 0;  // For participants each year

  // Set intervals and clear them at the specified targets
  eventCountStop: any = setInterval(() => {
    this.eventCount++;
    if(this.eventCount == 50) {
      clearInterval(this.eventCountStop);
    }
  }, 100);  // Control interval in milliseconds

  trainingSessionCountStop: any = setInterval(() => {
    this.trainingSessionCount++;
    if(this.trainingSessionCount == 100) {
      clearInterval(this.trainingSessionCountStop);
    }
  }, 50);

  participantCountStop: any = setInterval(() => {
    this.participantCount++;
    if(this.participantCount == 500) {
      clearInterval(this.participantCountStop);
    }
  }, 10);

  // Conclusion: Using the same logic and methods as provided, just changing the variables and conditions
}