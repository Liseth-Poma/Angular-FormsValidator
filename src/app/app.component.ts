import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsComponent } from './forms/forms.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponentComponent, FormsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ValidaciondeForms';
}
