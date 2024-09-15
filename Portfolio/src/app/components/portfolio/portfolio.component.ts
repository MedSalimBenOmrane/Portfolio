import { AfterViewInit, Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements AfterViewInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
      const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        this.renderer.addClass(reveals[i], 'active');
      } else {
        this.renderer.removeClass(reveals[i], 'active');
      }
    }
    
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    for (let i = 0; i < reveals.length; i++) {
      const elementTop = (reveals[i] as HTMLElement).getBoundingClientRect().top;

      if (elementTop < windowHeight - elementVisible) {
        this.renderer.addClass(reveals[i], 'active');
      } else {
        this.renderer.removeClass(reveals[i], 'active');
      }
    }
  
  }
  ngAfterViewInit() {
    let intro = document.querySelector('.intro') as HTMLElement;
    let logoHeader = document.querySelector('.logo-header') as HTMLElement;
    let logoSpan = document.querySelectorAll('.logo');

    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        logoSpan.forEach((span, idx) => {
          setTimeout(() => {
            span.classList.add('active');
          }, (idx + 1) * 400);
        });

        setTimeout(() => {
          logoSpan.forEach((span, idx) => {
            setTimeout(() => {
              span.classList.remove('active');
              span.classList.add('fade');
            }, (idx + 1) * 50);
          });
        }, 2000);

        setTimeout(() => {
          intro.style.top = '-100%';
        }, 2300);
      });
    });
  }


}
