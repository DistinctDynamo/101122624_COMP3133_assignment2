import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login{
  private readonly userService = inject(UserService)

  userForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
   this.loginUser();
  }

  loginUser(){
    if(this.userForm.invalid) return
     var {email, password} = this.userForm.getRawValue();
     if (password == null){
      password = ""
     }
     if (email == null){
      email = ""
     }
     this.userService.login(email, password).subscribe(() => {
     this.resetForm();
    });
  }

  resetForm() {
    this.userForm.reset();
  }
}
