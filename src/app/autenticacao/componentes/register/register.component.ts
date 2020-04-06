import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder, private $ngFireAuth: AngularFireAuth, private router: Router) {
    this.createForm()
  }

  register() {
    this.$ngFireAuth.createUserWithEmailAndPassword(
      this.registerForm.get('email').value,
      this.registerForm.get('senha').value
    ).then(
      (userCredentials) => {
        userCredentials.user.updateProfile({
          displayName: this.registerForm.get('username').value
        }).then(() => {
          this.router.navigate(['/auth/login'])
        })
      },
      (error) => {

      }
    )
  }

  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
  }

  ngOnInit() {}

}
