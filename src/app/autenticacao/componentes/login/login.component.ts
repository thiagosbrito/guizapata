import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { ConsoleReporter } from 'jasmine';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  errorMessage: string

  constructor(private formBuilder: FormBuilder, private $ngFireAuth: AngularFireAuth, private router: Router) {
    this.createLoginForm()
  }

  login() {
    this.$ngFireAuth.signInWithEmailAndPassword(
      this.loginForm.get('email').value,
      this.loginForm.get('password').value
    ).then(
      () => {
        this.router.navigate(['/main/home'])
      },
      (error) => {
        console.log(error)
        this.errorMessage = error.message
      })

    this.loginForm.reset();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.errorMessage = null
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required]],
      password: ['', [ Validators.required]]
    })
  }

}
