// Title: Assignment 9.2 Capstone
// Author: Professor Krasso
// Date: Dec 16 2022
// Modified: Detres
//Week-8 exercises/videos
//https://www.youtube.com/watch?v=hAaoPOx_oIw
//https://openlibrary.org/
//https://www.npmjs.com/package/bootstrap-icons
//https://angular.io/api/router/RouterLink
//https://www.youtube.com/watch?v=kIvft1uEi4Y

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})

// include variables for fields
export class CalculatorComponent implements OnInit {
  loanForm!: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loanForm = this.fb.group({
      loanAmount: [''],
      interestRate: [''],
      numOfYears: [''],
    });
  }

  // https://www.youtube.com/watch?v=kIvft1uEi4Y
  calculateLoan() {
    const formValues = this.loanForm.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    const numOfMonths = numOfYears * 12;
    const ratePerPeriod = interestRate / 100 / 12;

    //calculate monthly payments and interest
    this.monthlyPayment =
      (loanAmount *
        (ratePerPeriod * Math.pow(ratePerPeriod + 1, numOfMonths))) /
      (Math.pow(1 + ratePerPeriod, numOfMonths) - 1);
    this.interest = this.monthlyPayment * numOfMonths - loanAmount;
  }

  clearEntries() {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanForm.reset();
  }

  get form() {
    return this.loanForm.controls;
  }
}
