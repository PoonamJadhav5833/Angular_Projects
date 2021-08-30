import { Component } from '@angular/core';
import { MarvellousComponent } from './marvellous/marvellous.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentDemo';
  name = 'Marvellous';
}
