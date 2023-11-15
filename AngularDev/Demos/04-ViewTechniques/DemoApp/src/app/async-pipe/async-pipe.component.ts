import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Observable, interval} from 'rxjs';
import {map} from 'rxjs/operators';

class Goal {
  constructor(public goalNumber: number, public goalTimestamp: Date) {}
}

@Component({
  selector: 'app-async-pipe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async-pipe.component.html',
  styleUrl: './async-pipe.component.css'
})
export class AsyncPipeComponent {

  firstGoal:      Promise<Date>;
  mostRecentGoal: Observable<Goal>;

  constructor() {
    this.firstGoal = new Promise((resolve, reject) => {
      setTimeout(() => resolve(new Date()), 3000)
    });

    this.mostRecentGoal = interval(3000).
                            pipe(map((n: number) => new Goal(n+1, new Date())));
  }
}