import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.css']
})
export class SkillsListComponent implements AfterViewInit {
  
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    const scrollers = this.elementRef.nativeElement.querySelectorAll('.scroller');

    // If a user hasn't opted for reduced motion, then we add the animation
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.addAnimation(scrollers);
    }
  }

  addAnimation(scrollers: NodeListOf<Element>): void {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller`
      scroller.setAttribute('data-animated', 'true');

      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector('.scroller__inner');
      const scrollerContent = Array.from(scrollerInner?.children || []);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true) as HTMLElement;
        duplicatedItem.setAttribute('aria-hidden', 'true');
        scrollerInner?.appendChild(duplicatedItem);
      });
    });
  }
}