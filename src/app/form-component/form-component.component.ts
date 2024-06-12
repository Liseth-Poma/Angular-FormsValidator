import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RecaptchaModule, RecaptchaFormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.scss'
})
export class FormComponentComponent implements OnInit{
  form: FormGroup;
  captchaValid: boolean = false;


  constructor(  private formBuilder: FormBuilder  ){
    this.buildForm();
    /*this.form?.valueChanges.pipe(
    debounceTime(1000)
    ).subscribe(value=>{
    console.log(value);
    })*/

  }
  ngOnInit(): void {
  }

  resolved(captchaResponse: string | null) {
    this.captchaValid = captchaResponse !== null && captchaResponse.length > 0;
  }

  private buildForm(){
      
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('',Validators.required),
      text: new FormControl('',[Validators.required, Validators.maxLength(200)]),
      category: new FormControl('',Validators.required),
      gender: new FormControl('',Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      recaptcha: new FormControl('', Validators.required),

    }
    )
  }

  save(event : Event){
    event.preventDefault();
    if (this.form.valid && this.captchaValid) {
      const datosFormulario = this.form.value;
      console.log(datosFormulario);
      Swal.fire({
        title: 'Éxito',
        text: 'Los datos se enviaron correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.form.reset(); // Reiniciar el formulario
      this.captchaValid = false; // Reiniciar el estado del captcha
    } else {
      this.form.markAllAsTouched();
    }
  }
}
