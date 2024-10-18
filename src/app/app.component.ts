import { Component } from '@angular/core';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
public displayValue: string | undefined;

  constructor(private calculatorService: CalculatorService) { }

  appendValue(value: string): void {
  this.calculatorService.append(value);
  this.displayValue=this.calculatorService.getExpression();
  }

  calculateResult(): void{
    this.displayValue=this.calculatorService.calculate();
  }
  reset(): void {
    this.calculatorService.reset();
    this.displayValue='';
  }
  delete(): void {
    this.calculatorService.delete();
    this.displayValue=this.calculatorService.getExpression();
  }
}
