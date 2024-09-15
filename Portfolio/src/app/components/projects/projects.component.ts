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
        'Sonocure',
        'IA',
        'Angular , next js ,Unet,Gemini,Rag',
        '2024',
        'https://github.com/MedSalimBenOmrane/Sonocure',
        'Conceived a non-invasive cancer detection solution using AI and sonogenetics, deployed on an Angular platform with AI models integrated via Flask for personalized care, Designed a UNet-based model for tumor segmentation in MRI images, achieving an average IoU/DICE score of 98.823 by leveraging a U-shaped architecture for precise size and location determination, Integrated a virtual assistant to respond to specific biology-related questions and provide real-time assistance.',
        ['thumbnail.jpg','image 1.png','image 2.png','image 3.png','image 4.png','image 5.png','image 6.png','image 7.png','image 8.png','image 9.png','image 10.png'],
        "https://www.youtube.com/embed/HcK686euC90?si=B56mm5BtsTEpz5sX",
        "Sonocure"
        
      ),
      new project(
        'PDF-CHATBOT',
        'IA',
        'Streamlit, PyPDF2, and LangChain,Google Generative AI ,FAISS ',
        '2024',
        'https://github.com/MedSalimBenOmrane/PDF-CHATBOT',
        ' This project involves creating a PDF chatbot using Streamlit, PyPDF2, and LangChain to read and analyze PDF content. It utilizes Google Generative AI for embeddings and conversational capabilities, and FAISS for efficient vector search. The chatbot can extract text from PDFs, split it into manageable chunks, and answer user questions based on the extracted information.',
        ['thumbnail.jpg','image 1.jpg'],
        "https://www.youtube.com/embed/LbtcI1qF45Y?si=UZ4scBkNilv2ky8H",
        ""
        
      ),
      
      new project(
        'Personality Detection system',
        'IA',
        'XLM ROBERTa - VIT -Streamlit -Selinium',
        '2024',
        'https://github.com/MedSalimBenOmrane/-Multimodal-Personality-Detection-system-PFA-',
        ' Designed a platform to scrape Instagram profiles using the provided URL, collecting posts, images, and captions for analysis.Utilized XLM-RoBERTa for text analysis and ViT for image feature extraction to predict user personalities. Generated visual representations of predicted personality traits. ',
        ['thumbnail.jpg','image 1.jpg'],
        "https://www.youtube.com/embed/-mkCC6rJm-8?si=kVBp7AmM2vBfqKVu",
        "Personality Detection system"

        
      ),
      new project(
        'YOLOv8-animal pose estimation',
        'IA',
        'Yolo V8m',
        '2024',
        'https://github.com/MedSalimBenOmrane/YOLOv8-animal-pose-estimation',
        'We are fine-tuning YOLOv8m-pose, pre-trained for human pose estimation, for animal pose estimation using the MacaquePose dataset. This aims to enhance pose detection accuracy in animals.',
        ['thumbnail.jpg','image 1.jpg'],
        "",
        ""

        
      ),
   

      new project(
        'Event Hub',
        'Web dev',
        'Angular - Nest JS',
        '2023',
        'https://github.com/MedSalimBenOmrane/Event-Hub',
        ' Developed an event management project with AngularJS and NestJS architecture, facilitating comprehensive solutions for creating, managing, and purchasing event tickets. Users can also customize events, and an integrated approval process ensures event quality. ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p",
        "Event Hub"
        
      ),
      new project(
        'Emotion Detection',
        'IA',
        'CNN , OpenCV ,tensorflow',
        '2024',
        'https://github.com/MedSalimBenOmrane/YOLOv8-animal-pose-estimation',
        'Developed a CNN-based system for real-time emotion detection from images, videos, and webcam feeds. Achieved 75% accuracy in detecting and classifying emotions for multiple faces simultaneously.',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg'],
        "",
        ""
        
      ),
 
      new project(
        'Tic Tac Toe',
        'game dev',
        'Unreal engine 5',
        '2023',
        '',
        'Tic Tac Toe is a unique twist on the classic tic-tac-toe game. Players engage in a 1v1 competition in 3 minutes where they strategically place their marks on a grid by bursting balloons using arrow and bow shots. The game concludes when a player achieves a traditional tic-tac-toe formation or when time runs out. Each burst balloon earns a point, and the player with the most points in the end wins. To enhance gameplay,  players can also collect special abilities ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "https://www.youtube.com/embed/k3qTqowV-IA?si=nDMDqDgUL76ETPS3",
        "Tic Tac Toe"
        
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
        "Image Anomaly Detection"
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
