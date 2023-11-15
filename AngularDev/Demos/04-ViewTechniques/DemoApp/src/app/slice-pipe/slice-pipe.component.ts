import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slice-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slice-pipe.component.html',
  styleUrl: './slice-pipe.component.css'
})
export class SlicePipeComponent {

  skills: Array<string>;
    
  constructor() {
    this.skills = ['Java', 'C#', 'HTML5', 'TypeScript', 'Angular'];
  }
}