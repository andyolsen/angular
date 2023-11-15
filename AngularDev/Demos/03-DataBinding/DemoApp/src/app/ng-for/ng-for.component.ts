import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  salary: number;
  skills: Array<string>;
  
  constructor() {
    this.firstName = 'Ola';
    this.lastName = 'Nordmann';
    this.nationality = 'Norge';
    this.emailAddress = 'ola.nordmann@mydomain.com';
    this.salary = 25000;        
    this.skills = ['JavaScript', 'Angular', 'C#', 'Java'];
  }
  
  payRise() {
    this.salary = this.salary + 5000;
  }
}
