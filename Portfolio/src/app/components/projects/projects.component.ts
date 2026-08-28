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
        'HE→HES Virtual Staining',
        'IA',
        'PyTorch, Conditional Flow Matching, DDPM, Optuna, Streamlit, SimpleITK',
        '2026',
        'https://subjective-hes-image-evaluation.vercel.app/',
        'First-author research accepted at MICCAI 2026, conducted at CentraleSupélec (CVN Lab, Université Paris-Saclay) under Prof. Jean-Christophe Pesquet, with a clinical collaboration at AP-HP Hôpital Bicêtre. Designed a Conditional Flow Matching framework that digitally generates saffron-stained HES images from standard HE histopathology slides, operating in the physically grounded concentration domain via Beer-Lambert stain separation rather than raw RGB. The model predicts the missing saffron concentration map conditioned on hematoxylin and eosin, then reconstructs the final RGB image, outperforming CycleGAN, Pix2Pix and recent diffusion baselines with a 2% PSNR gain (32.06 dB) and over 35% reduction in perceptual error. Trained and evaluated on 30,000+ patches extracted from 25 whole slide images, validated on a public multi-tissue benchmark, and confirmed by five expert pathologists. Built a reproducible Streamlit interface for interactive inference and side-by-side visual comparison.',
        ['thumbnail.jpg','0.jpg','1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg'],
        'https://www.youtube.com/embed/XXXXXXXXXXX?si=YYYYYYYYYYY',
        'miccai paper',
        'Download MICCAI Paper',
        'thumbnail.jpg',
        ['https://github.com/MedSalimBenOmrane/CFM-HES']
      ),
      new project(
            'OmniCoach-AI',
            'IA',
            'LangGraph, LangChain, Ollama, Streamlit, ChromaDB, faster-Whisper, Plotly, Docker',
            '2026',
            '',
            'Multi-agent AI staff for football coaches, orchestrating four specialized LLM agents (Scout, Tactician, Physio, Psychologist) built with LangChain and LangGraph on a locally hosted Ollama model (qwen2.5:32b) fully local-first, no external API calls. An Orchestrator agent splits a single free-form coach request into per-agent sub-tasks, confirmed before execution. Every agent is grounded in real StatsBomb Open Data (2022 World Cup): each generated figure traces back to an explicit deterministic tool call, exposed in the UI as a grounding trace the core anti-hallucination guarantee. The Tactician agent renders an animated Plotly tactical scenario from StatsBomb 360 spatial data:rd goal with physically realistic movement (passduration from real distance, individual per-defender pressing, live offside-line enforcement). Voice input is transcribed locally via faster-Whisper, RAG-backed report retrieval runs on Chroma, and the whole interface including every agent-generated response is bilingual (FR/EN) with a one-click language sed Streamlit app.',
            ['thumbnail.jpg','0- architecture.jpg'],
            '',
            'OmniCoach-AI',
            'Download Report',
            'thumbnail.jpg',
            ['https://github.com/MedSalimBenOmrane/OmniCoach-AI']
          ),

      new project(
        'SAHERA Platform',
        'Web dev',
        'Angular, Flask, PostgreSQL, Docker, AWS, GitHub Actions, JWT',
        '2025',
        '',
        'Full-stack bilingual (FR/EN) platform for anonymized scientific data collection, replacing paper-based surveys. Angular frontend with a Flask REST API and PostgreSQL, secured by email-OTP registration, explicit consent, and JWT sessions. Anonymized responses let researchers view only aggregated statistics, with CSV questionnaire import and in-app plus email notifications. Deployed on AWS (S3 + CloudFront, Dockerized backend on Elastic Beanstalk, managed RDS) with HTTPS end-to-end and automated CI/CD via GitHub Actions.',
        ['thumbnial.jpg','0- aws architecture.jpg','1 -Hero page.png','2- home page.png','3- OTP.png','4- login.png','5- Dashboard.png','6- questionnaire page.png','6.5 questions.png','7- creation thematique.png','8- responses.png','9-analyse reponse.png','10- status.png','11- questiojns.png','11.5 repondre.png','12- envoi mail.png','13- mail.png','14 - notification.png'],
        '',
        '',
        'Download Report',
        'thumbnial.jpg',
        ['https://github.com/MedSalimBenOmrane/Sahera', 'https://github.com/MedSalimBenOmrane/Sahera_back']
      ),
      new project(
        'Sonocure',
        'IA',
        'Angular , next js ,Unet,Gemini,Rag',
        '2024',
        '',
        'Conceived a non-invasive cancer detection solution using AI and sonogenetics, deployed on an Angular platform with AI models integrated via Flask for personalized care, Designed a UNet-based model for tumor segmentation in MRI images, achieving an average IoU/DICE score of 98.823 by leveraging a U-shaped architecture for precise size and location determination, Integrated a virtual assistant to respond to specific biology-related questions and provide real-time assistance.',
        ['thumbnail.jpg','image 1.png','image 2.png','image 3.png','image 4.png','image 5.png','image 6.png','image 7.png','image 8.png','image 9.png','image 10.png'],
        "https://www.youtube.com/embed/HcK686euC90?si=B56mm5BtsTEpz5sX",
        "Sonocure",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/Sonocure']
      ),
      new project(
        'PDF-CHATBOT',
        'IA',
        'Streamlit, PyPDF2, and LangChain,Google Generative AI ,FAISS ',
        '2024',
        '',
        ' This project involves creating a PDF chatbot using Streamlit, PyPDF2, and LangChain to read and analyze PDF content. It utilizes Google Generative AI for embeddings and conversational capabilities, and FAISS for efficient vector search. The chatbot can extract text from PDFs, split it into manageable chunks, and answer user questions based on the extracted information.',
        ['thumbnail.jpg','image 1.jpg'],
        "https://www.youtube.com/embed/LbtcI1qF45Y?si=UZ4scBkNilv2ky8H",
        "",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/PDF-CHATBOT']
      ),
      new project(
        'Personality Detection system',
        'IA',
        'XLM ROBERTa - VIT -Streamlit -Selinium',
        '2024',
        '',
        ' Designed a platform to scrape Instagram profiles using the provided URL, collecting posts, images, and captions for analysis.Utilized XLM-RoBERTa for text analysis and ViT for image feature extraction to predict user personalities. Generated visual representations of predicted personality traits. ',
        ['thumbnail.jpg','image 1.jpg'],
        "https://www.youtube.com/embed/-mkCC6rJm-8?si=kVBp7AmM2vBfqKVu",
        "Personality Detection system",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/-Multimodal-Personality-Detection-system-PFA-']
      ),
      new project(
        'YOLOv8-animal pose estimation',
        'IA',
        'Yolo V8m',
        '2024',
        '',
        'We are fine-tuning YOLOv8m-pose, pre-trained for human pose estimation, for animal pose estimation using the MacaquePose dataset. This aims to enhance pose detection accuracy in animals.',
        ['thumbnail.jpg','image 1.jpg'],
        "",
        "",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/YOLOv8-animal-pose-estimation']
      ),
      new project(
        'Event Hub',
        'Web dev',
        'Angular - Nest JS',
        '2023',
        '',
        ' Developed an event management project with AngularJS and NestJS architecture, facilitating comprehensive solutions for creating, managing, and purchasing event tickets. Users can also customize events, and an integrated approval process ensures event quality. ',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg','image 3.jpg','image 4.jpg','image 5.jpg','image 6.jpg'],
        "https://www.youtube.com/embed/KnTs16PImcA?si=b4Ig_53-Ux-J-_4p",
        "Event Hub",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/Event-Hub']
      ),
      new project(
        'Emotion Detection',
        'IA',
        'CNN , OpenCV ,tensorflow',
        '2024',
        '',
        'Developed a CNN-based system for real-time emotion detection from images, videos, and webcam feeds. Achieved 75% accuracy in detecting and classifying emotions for multiple faces simultaneously.',
        ['thumbnail.jpg','image 1.jpg','image 2.jpg'],
        "",
        "",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/Emotion-Detection']
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
        '',
        "Developed a project with the objective of automating the identification of a screw's normal condition and detecting any potential scratches. Achieved accurate predictions through the analysis of input images, employing an autoencoder in the process.",
        ['thumbnail.jpg',],
        "https://www.youtube.com/embed/uJyh1AMuxHc?si=b3cQgKbAqcaqZHIM",
        "Image Anomaly Detection",
        "Download Report",
        "thumbnail.jpg",
        ['https://github.com/MedSalimBenOmrane/ppp']
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
  downloadPdf(title: string, pdfFile: string) {
    const pdfUrl = `assets/projects image/${title}/${pdfFile}.pdf`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${pdfFile}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}
