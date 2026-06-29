import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [
    CommonModule
  ],
  templateUrl: './about-component.html',
  styleUrl: './about-component.css',
})
export class AboutComponent {
  stats = [
    { value: '1+',   label: 'Years Experience' },
    { value: '10+',  label: 'Projects Completed' },
    { value: '100%', label: 'Commitment' },
  ];
}
