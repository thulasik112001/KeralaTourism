import { NgIf } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  encapsulation: ViewEncapsulation.None,

})
export class SignupComponent {
  signupform!: FormGroup;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.signupform=new FormGroup({
      name:new FormControl('',[Validators.required,Validators.minLength(4)]),
      email:new FormControl('',[Validators.required,Validators.minLength(4)]),
      password:new FormControl('',[Validators.required,Validators.minLength(4)]),

    })
  }
  onSubmit(){
    if (this.signupform.valid) {
      console.log(this.signupform.value);
      this.router.navigate(['/login']);
    } else {
      console.log('Form is not valid');
    }
    }
  }

