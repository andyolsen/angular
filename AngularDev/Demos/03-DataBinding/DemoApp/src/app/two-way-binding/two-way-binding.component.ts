import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.css'
})
export class TwoWayBindingComponent {

  firstName: string;
  lastName: string;
  nationality: string;
  emailAddress: string;
  salary: number;

  constructor() {
    this.firstName = 'Ola';
    this.lastName = 'Nordmann';
    this.nationality = 'Norsk';
    this.emailAddress = 'ola.nordmann@mydomain.com';
    this.salary = 25000;		
  }

  payRise() {
    this.salary = this.salary + 5000;
  }

  onSalaryChange($event: any) {
    this.salary = Number($event.target.value);
  }
}