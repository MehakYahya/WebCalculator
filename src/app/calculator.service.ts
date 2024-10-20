import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {

  evaluateExpression(expression: string): string {
    try {
      const result = eval(expression);
      return result.toString();
    } catch (error) {
      throw new Error('Invalid expression');
    }
  }

  isOperator(character: string): boolean {
    return ['+', '-', '*', '/'].includes(character);
  }

  containsDot(value: string): boolean {
    return value.includes('.');
  }

  validateExpression(expression: string): boolean {
    const ope = /^[0-9+\-*/.() ]+$/;
    return ope.test(expression);
  }
}
