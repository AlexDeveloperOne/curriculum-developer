import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit{

  constructor(private dataExperience : ExperienceService) {}

  experiencias: any[] = [];

  ngOnInit(): void {
    this.experiencias = this.dataExperience.experiencias;
  }

}
