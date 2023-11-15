import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-additional-techniques',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './additional-techniques.component.html',
  styleUrl: './additional-techniques.component.css'
})
export class AdditionalTechniquesComponent {

  name = "Kari Nordmann";
  skills = "";

  addSkill(newSkill: HTMLInputElement) {
    this.skills += newSkill.value + " ";
    newSkill.value = "";
    newSkill.focus();
  }
}