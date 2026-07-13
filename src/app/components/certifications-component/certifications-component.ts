import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ConstantService } from '../../services/constant-service';

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

  certifications: Certification[] = [];

  constructor(private router: Router, private constantService: ConstantService) {}

  ngOnInit(): void {
    if ( this.router.url == "/certifications" ) {
      this.isPreview = false;
      this.certifications = this.constantService.certifications;
    } else {
      this.isPreview = true;
      this.certifications = this.constantService.certifications.slice(0, 2);
    }
  }
}
