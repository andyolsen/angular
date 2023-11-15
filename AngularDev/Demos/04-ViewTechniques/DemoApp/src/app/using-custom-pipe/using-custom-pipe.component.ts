import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexiTitleCasePipe } from '../flexi-title-case.pipe';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [CommonModule, FlexiTitleCasePipe],
  templateUrl: './using-custom-pipe.component.html',
  styleUrl: './using-custom-pipe.component.css'
})
export class UsingCustomPipeComponent {

  name: string;

  constructor() {
    this.name = 'miguel michu';
  }
}