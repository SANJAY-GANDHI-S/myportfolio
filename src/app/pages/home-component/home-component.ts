import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar-component/navbar-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { AboutComponent } from '../../components/about-component/about-component';
import { SkillsComponent } from '../../components/skills-component/skills-component';
import { ProjectComponent } from '../../components/project-component/project-component';
import { ExperienceComponent } from '../../components/experience-component/experience-component';
import { CertificationsComponent } from '../../components/certifications-component/certifications-component';
import { FooterComponent } from '../../core/footer-component/footer-component';

@Component({
  selector: 'app-home-component',
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectComponent,
    ExperienceComponent,
    CertificationsComponent,
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {}
