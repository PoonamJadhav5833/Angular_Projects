import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvellous',
  templateUrl: './marvellous.component.html',
  styleUrls: ['./marvellous.component.css']
})
export class InfosystemComponent implements OnInit {
name = "Angular-12";
fun () : string
{
  return "Inside Fun()";
}
  constructor() { }

  ngOnInit(): void {
  }

}
