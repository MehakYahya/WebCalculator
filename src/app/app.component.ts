import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';
import { NgClass } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {FormatNumberPipe} from './format.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    NgClass,
    ReactiveFormsModule,
    FormatNumberPipe
  ],
  standalone: true
})
export class AppComponent {
  appTitle: string = 'Calculator';
  displayValue: string = '';

  constructor(private calculatorService: CalculatorService) {}

  appendValue(value: string) {
    if (this.calculatorService.isOperator(value) && this.calculatorService.isOperator(this.displayValue.slice(-1))) {
      return;
    }

    if (value === '.' && this.calculatorService.containsDot(this.displayValue)) {
      return;
    }

    this.displayValue += value;
  }

  calculateResult() {
    if (!this.calculatorService.validateExpression(this.displayValue)) {
      this.displayValue = 'Error';
      return;
    }

    try {
      this.displayValue = this.calculatorService.evaluateExpression(this.displayValue);
    } catch (e) {
      this.displayValue = 'Error';
    }
  }

  reset() {
    this.displayValue = '';
  }

  delete() {
    this.displayValue = this.displayValue.slice(0, -1);
  }
}
