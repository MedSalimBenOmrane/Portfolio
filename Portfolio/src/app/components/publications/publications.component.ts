import { Component } from '@angular/core';
import { Publication } from 'src/app/model/publication';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent {
  publications: Publication[];

  constructor() {
    this.publications = [
      new Publication(
        'Making HE Histopathological Images More Colorful by Conditional Flow Matching',
        [
          'Mohamed Salim Ben Omrane',
          'Ségolène Martin',
          'Mounir Kaaniche',
          'Astrid Laurent-Bellue',
          'Wided Miled Souid',
          'Catherine Guettier',
          'Jean-Christophe Pesquet',
        ],
        'Mohamed Salim Ben Omrane',
        'MICCAI 2026',
        '2026',
        'Accepted',
        'Recently, virtual stain generation has emerged as a promising tool in histopathology, with the objective of enabling rapid and cost-effective staining procedures. While current staining protocols commonly rely on hematoxylin (H) and eosin (E), additional stains—such as saffron (S)—have demonstrated clinical value in pathological practice in some countries. In this paper, we investigate generative models to produce HES-stained images from standard HE-stained samples. The proposed method operates in the concentration domain, leveraging a stain separation algorithm to first extract concentration maps from the input HE images. A conditional Flow Matching framework is then developed to digitally generate the saffron stain, conditioned on the hematoxylin and eosin concentration maps. Finally, the RGB HES digital image is reconstructed according to the Beer–Lambert law. Extensive experiments on private and benchmark multi-tissue datasets demonstrate that the proposed approach produces high-fidelity HES images with strong visual realism.',
        [
          {
            label: 'MICCAI Paper',
            url: 'assets/projects image/HE→HES Virtual Staining/miccai paper.pdf',
            icon: 'fa-solid fa-file-pdf',
          },
          {
            label: 'Code',
            url: 'https://github.com/MedSalimBenOmrane/CFM-HES',
            icon: 'fa-brands fa-github',
          },
          {
            label: 'Demo',
            url: 'https://subjective-hes-image-evaluation.vercel.app/',
            icon: 'fa-solid fa-globe',
          },
        ]
      ),
    ];
  }

  toggleAbstract(pub: Publication): void {
    pub.expanded = !pub.expanded;
  }
}
