// Title: Assignment 9.2 Capstone
// Author: Professor Krasso
// Date: Dec 16 2022
// Modified: Detres
//Week-8 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw
//https://openlibrary.org/
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;
  constructor() {
    this.assignment = 'Welcome to the Gryffindor Loan Calculator';
  }
}
