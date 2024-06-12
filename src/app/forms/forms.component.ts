import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, Validators, FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {

  emailCtrl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]);

  // create constructor
  constructor() { 
    this.emailCtrl.valueChanges.pipe(
    debounceTime(400)
    ).subscribe(value => console.log(value))
  }
  
  getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

  // send 

}
