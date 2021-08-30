import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: ``
  <button (click)="fun()">Hello</button>
{{name}}
})
export class DemoComponent implements ngOnInit
{
  name : string; 
  {
fun()
{
  this.name="Button clicked";
}
  constructor() 
  {
    this.name = "";
   }

  ngOnInit(): void {
  }

}
