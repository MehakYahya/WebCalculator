import { Injectable } from '@angular/core';
import {AppSettings} from './app.config';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

private apiUrl=AppSettings.apiUrl;
constructor (){
  console.log(' Api Url:',this.apiUrl);
}

private expression: string='';
append(value: string): void{
  this.expression += value;
}
getExpression(): string {
  return this.expression;
}
calculate():string{
  try{
    const result=eval(this.expression);
    this.expression=result.toString();
    return this.expression;

  }catch(e){
    return 'Error';
  }
}

reset():void{
  this.expression='';
}
delete():void {
  this.expression=this.expression.slice(0, -1);
}
}
