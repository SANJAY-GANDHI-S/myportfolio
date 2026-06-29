import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home-component/home-component';
import { NavbarComponent } from './core/navbar-component/navbar-component';
import { HeroComponent } from './components/hero-component/hero-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { ProjectComponent } from './components/project-component/project-component';
import { ExperienceComponent } from './components/experience-component/experience-component';
import { CertificationsComponent } from './components/certifications-component/certifications-component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'skills',
        component: SkillsComponent
    },
    {
        path: 'projects',
        component: ProjectComponent
    },
    {
        path: 'experience',
        component: ExperienceComponent
    },
    {
        path: 'certifications',
        component: CertificationsComponent
    },
];
