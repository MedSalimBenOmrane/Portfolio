import { Component, TemplateRef } from '@angular/core';
import { project } from 'src/app/model/project';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: project[];
  path1:string="https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p";
  constructor(private modalService: NgbModal) {
    this.projects = [
      new project(
        'PDF-CHATBOT',
        'IA',
        'Streamlit, PyPDF2, and LangChain,Google Generative AI ,FAISS ',
        '2024',
        'https://github.com/MedSalimBenOmrane/PDF-CHATBOT',
        ' This project involves creating a PDF chatbot using Streamlit, PyPDF2, and LangChain to read and analyze PDF content. It utilizes Google Generative AI for embeddings and conversational capabilities, and FAISS for efficient vector search. The chatbot can extract text from PDFs, split it into manageable chunks, and answer user questions based on the extracted information.',
        ['thumbnail.jpg','image 1.jpg'],
        "https://www.youtube.com/embed/LbtcI1qF45Y?si=UZ4scBkNilv2ky8H"
        
      ),
      new project(
        'Personality Detection system',
        'IA',
        'XLM ROBERTa - VIT -Streamlit -Selinium',
        '2024',
        'https://github.com/MedSalimBenOmrane/-Multimodal-Personality-Detection-system-PFA-',
        ' Designed a platform to scrape Instagram profiles using the provided URL, collecting posts, images, and captions for analysis.Utilized XLM-RoBERTa for text analysis and ViT for image feature extraction to predict user personalities. Generated visual representations of predicted personality traits. ',
        ['thumbnail.jpg',],
        "https://www.youtube.com/embed/-mkCC6rJm-8?si=kVBp7AmM2vBfqKVu"
        
      ),

      new project(
        'Event Hub',
        'Web dev',
        'Angular - Nest JS',
        '2023',
        'https://github.com/MedSalimBenOmrane/Event-Hub',
        ' Developed an event management project with AngularJS and NestJS architecture, facilitating comprehensive solutions for creating, managing, and purchasing event tickets. Users can also customize events, and an integrated approval process ensures event quality. ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p"
        
      ),
      new project(
        'Tic Tac Toe',
        'game dev',
        'Unreal engine 5',
        '2023',
        '',
        'Tic Tac Toe is a unique twist on the classic tic-tac-toe game. Players engage in a 1v1 competition in 3 minutes where they strategically place their marks on a grid by bursting balloons using arrow and bow shots. The game concludes when a player achieves a traditional tic-tac-toe formation or when time runs out. Each burst balloon earns a point, and the player with the most points in the end wins. To enhance gameplay,  players can also collect special abilities ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "https://www.youtube.com/embed/k3qTqowV-IA?si=nDMDqDgUL76ETPS3" 
        
      ),
      new project(
        'Image Anomaly Detection',
        'Deep learning',
        'Auto Encoder',
        '2023',
        'https://github.com/MedSalimBenOmrane/ppp/blob/main/screw_anomalies_autoencoder_(1).ipynb',
        "Developed a project with the objective of automating the identification of a screw's normal condition and detecting any potential scratches. Achieved accurate predictions through the analysis of input images, employing an autoencoder in the process.",
        ['thumbnail.jpg',],
        "https://www.youtube.com/embed/uJyh1AMuxHc?si=b3cQgKbAqcaqZHIM",
      ),



    ];
  }
  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, {
      centered: true,
      modalDialogClass: 'dark-modal',
      windowClass: 'dark-modal',
      size: 'xl',
    });
  }
  downloadPdf(title:string) {
    const pdfUrl = `assets/projects image/${title}/${title}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    link.click();
    document.body.removeChild(link);
  }

}
