import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    if (value === 'Error') {
      return value;
    }

    let [integerPart, decimalPart] = value.split('.');

    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    if (decimalPart) {
      decimalPart = decimalPart.substring(0, 2);
      return `${integerPart}.${decimalPart}`;
    }

    return integerPart;
  }
}
