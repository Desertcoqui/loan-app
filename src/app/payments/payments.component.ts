// Title: Assignment 9.2 Capstone
// Author: Professor Krasso
// Date: Dec 16 2022
// Modified: Detres
//Week-8 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw
//https://openlibrary.org/
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss'],
})
export class PaymentsComponent implements OnInit {
  @Input() monthlyPayment!: number;

  constructor() {}

  ngOnInit(): void {}
}
