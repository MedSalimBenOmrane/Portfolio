import { Component } from '@angular/core';
import { Expinfo } from 'src/app/model/exp_info';

@Component({
  selector: 'app-experience-page',
  templateUrl: './experience-page.component.html',
  styleUrls: ['./experience-page.component.css'],
})
export class ExperiencePageComponent {
  exps: Expinfo[];
  education: Expinfo[];

  constructor() {
    this.exps = [
      new Expinfo(
        'CentraleSupélec, CVN Lab (Paris, France) — Generative AI Engineer (CDD)',
        'Sep 2025 - Present',
        [
          'Designed a Conditional Flow Matching framework for virtual histological staining (HE→HES), outperforming CycleGAN/Pix2Pix baselines.',
          'First author of a research paper submitted to MICCAI 2026 (under review).',
          "Working within Prof. Jean-Christophe Pesquet's group on physics-informed generative models.",
        ]
      ),
      new Expinfo(
        'CentraleSupélec, CVN Lab, (Paris, France) — Research Intern (Stage PFE)',
        'Apr 2025 - Sep 2025',
        [
          'Benchmarked generative models (DDPM, DDIM, Flow Matching, Plug-and-Play FM) for physically grounded image reconstruction in digital pathology.',
          'Curated and preprocessed 30,000+ histology patches for model training and evaluation.',
        ]
      ),
      new Expinfo(
        'SaHera Care Solutions, (Montréal, Canada)  — Freelance Full-Stack Developer',
        'Apr 2025 - Dec 2025',
        [
          'Built and deployed SAHERA, a secure platform (Angular + Flask) collecting anonymized participant feedback on a femtech auricular acupressure device for perimenopause symptoms.',
          'Implemented JWT auth, OTP-based registration with informed consent, and multilingual (FR/EN) CSV-driven questionnaire management.',
          'Deployed on AWS (Elastic Beanstalk, RDS PostgreSQL, S3, CloudFront) with CI/CD via GitHub Actions and CloudWatch monitoring.',
        ]
      ),
      new Expinfo(
        'Luxolor Boats, (Tunis, Tunisia) — AI Engineer, Production AI / LLM System (Part-time)',
        'Jan 2024 - Oct 2025',
        [
          'Built and deployed to production a multimodal LLM and RAG system over 2,000+ heterogeneous business documents across 5 departments, cutting internal retrieval time by 80%.',
          'Owned the full lifecycle as sole engineer: hybrid retrieval (LangChain, vector + BM25), backend API, frontend, and Dockerized deployment serving 20+ daily users.',
          "Adapted the system to the client's own business tools and workflows through direct work with domain experts, taking it from demo to reliable day-to-day production use.",
          'Designed reusable retrieval and orchestration patterns, with document-level citations for traceability and reliability in real conditions.',
          'Diagnosed and fixed live failures, monitored answer quality, and iterated on the system based on direct user feedback to keep it reliable in production.',
        ]
      ),
      new Expinfo(
        'AI and Biotechnology Intern/Web Developer- Talan Tunisie International',
        'Summer-2024',
        [
          'Conceived a non-invasive cancer detection solution using AI and sonogenetics, deployed on an Angular platform with AI models integrated via Flask for personalized care.',
          'Designed a UNet-based model for tumor segmentation in MRI images, achieving an average IoU/DICE score of 98.823 by leveraging a U-shaped architecture for precise size and location determination.',
          'Implemented a virtual assistant to respond to specific biology-related questions and provide real-time assistance.',
        ]
      ),
      new Expinfo(
        'GAME Developer Internship - Lanterns Studios',
        'Summer-2023',
        [
          'Developed a dynamic 3D Tic tac toe multiplayer game using Unreal Engine 5.',
        ]
      ),
    ];

    this.education = [
      new Expinfo(
        'INSAT - Engineering Degree, Computer Networks & Telecommunications, AI & Generative AI specialization',
        '2020 - Oct 2025',
        [
          'Graduated October 2025 with High Honors (Mention Très Bien).',
        ]
      ),
      new Expinfo(
        'Baccalaureate Degree',
        'August-2020',
        [
          'Baccalaureate Degree in Computer Science.',
        ]
      ),
    ];
  }
}
