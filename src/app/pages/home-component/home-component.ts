import { Component } from '@angular/core';
import { NavbarComponent } from '../../core/navbar-component/navbar-component';
import { HeroComponent } from '../../components/hero-component/hero-component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../components/about-component/about-component';
import { SkillsComponent } from '../../components/skills-component/skills-component';

@Component({
  selector: 'app-home-component',
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    CommonModule
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {}
