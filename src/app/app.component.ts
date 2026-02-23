import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeworkSubmitComponent } from './homework-submit/homework-submit.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeworkSubmitComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
