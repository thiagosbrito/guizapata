import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AngularFireAuth } from '@angular/fire/auth'

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})

export class EditProfileComponent implements OnInit {

  editForm: FormGroup;

  currentUser: {
    displayName: string;
    email: string;
    password?: string;
  };

  constructor(private construtorForm: FormBuilder, private $ngFireAuth: AngularFireAuth) {
    this.montarFormulario();
  }


  popularObjUsuario() {
    this.$ngFireAuth.authState.subscribe(state => {
      this.currentUser = {
        displayName: state.displayName || '',
        email: state.email || ''
      }
      this.definerValorDoFormulario();
    })
  }

  definerValorDoFormulario() {
    this.editForm.patchValue({
      displayName: this.currentUser.displayName,
      email: this.currentUser.email
    })
  }

  atualizarDados() {
    this.$ngFireAuth.currentUser.then((user) => {
      user.updateEmail(this.editForm.get('email').value)
      user.updateProfile({ displayName: this.editForm.get('displayName').value })
      if (this.editForm.get('password').value) {
        user.updatePassword(this.editForm.get('password').value)
      }
    }).then((success) => {
      console.log('Perfil Atualizado')
    })
  }

  ngOnInit() {
    this.popularObjUsuario();
  }

  montarFormulario() {
    this.editForm = this.construtorForm.group({
      displayName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }


}
