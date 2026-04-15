import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  private readonly userService = inject(UserService)

  userSignupForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  onSubmit(){
    if (this.userSignupForm.invalid) return;
    this.signUpUser();
  }

   signUpUser() {
    const user = this.userSignupForm.getRawValue();

    this.userService.signUp(user).subscribe(() => {
      this.resetForm();
    });
  }

  resetForm() {
    this.userSignupForm.reset();
  }
}
