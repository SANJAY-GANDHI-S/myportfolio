import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  credentialUrl: string;
  logo: string;
  logoColor: string;
  badge: string;
  certificationUrl: string;
}

@Component({
  selector: 'app-certifications',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './certifications-component.html',
  styleUrl: './certifications-component.css',
})
export class CertificationsComponent implements OnInit {
  
  isPreview: boolean = true;

  certifications: Certification[] = [
    {
      title: 'Angular – Introduction to Front End Development',
      issuer: 'simplilearn',
      year: '2024',
      credentialUrl: 'https://simpli-web.app.link/e/3jy354ydrVb',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      logoColor: '#dd0031',
      badge: 'Angular',
      certificationUrl: 'assets/IntroductionToFrontEndDevelopment.jpg',
    },
    {
      title: 'TypeScript – From Beginner to Pro',
      issuer: 'Udemy',
      year: '2024',
      credentialUrl: 'https://udemy.com',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      logoColor: '#3178c6',
      badge: 'TypeScript',
      certificationUrl: '',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    if ( this.router.url == "/certifications" ) {
      this.isPreview = false;
    }
  }
}
