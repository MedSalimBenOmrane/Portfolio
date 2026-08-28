import { Component } from '@angular/core';

const BIRTH_DATE = '2001-06-11';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  birthDate = BIRTH_DATE;

  calculateAge(birthDateString: string): number {
    const today = new Date();
    const birth = new Date(birthDateString);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  downloadPdf() {
    const pdfUrl = 'assets/Mohamed_Salim_Ben_Omrane_CV.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Mohamed_Salim_Ben_Omrane_CV.pdf';
    link.click();
  }
}
