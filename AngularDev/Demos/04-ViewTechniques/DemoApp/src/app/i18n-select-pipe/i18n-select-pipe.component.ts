import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-i18n-select-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './i18n-select-pipe.component.html',
  styleUrl: './i18n-select-pipe.component.css'
})
export class I18nSelectPipeComponent {

  birthCountry: string;
  workCountry:  string;
  holsCountry:  string;
  
  countryMapping = {
    'UK': 'United Kingdom', 
    'NO': 'Norway',
    'FR': 'France',
    '??': 'Other'
  };

  constructor() {
    this.birthCountry = 'UK';
    this.workCountry  = 'NO';
    this.holsCountry  = '??';
  }
}