import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-i18n-plural-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i18n-plural-pipe.component.html',
  styleUrl: './i18n-plural-pipe.component.css'
})
export class I18nPluralPipeComponent {

  softSkills:      Array<string>;
  businessSkills:  Array<string>;
  frameworkSkills: Array<string>;
  languageSkills:  Array<string>;
  
  messageMapping = {
    '=0':    'No skills', 
    '=1':    'One skill',
    'other': '# skills'
  };

  constructor() {
    this.softSkills      = [];
    this.businessSkills  = ['Gathering requirements'];
    this.frameworkSkills = ['Angular', 'jQuery', 'Bootstrap'];
    this.languageSkills  = ['Java', 'C#', 'C++', 'Python', 'Cobol', 'JavaScript'];
  }
}