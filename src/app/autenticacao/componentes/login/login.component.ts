import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  errorMessage: string

  constructor(private construtorForm: FormBuilder, private authService: AngularFireAuth, private router: Router) {
    this.createLoginForm()
  }

  login() {
    this.authService.signInWithEmailAndPassword(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).then(
      (success) => {
        this.router.navigate(['/main/home'])
      },
      (error) => {
        this.errorMessage = error.message
      }
    )
    this.loginForm.reset();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.errorMessage = null
  }

  createLoginForm() {
    this.loginForm = this.construtorForm.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]]
    })
  }

}
