import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  
}
