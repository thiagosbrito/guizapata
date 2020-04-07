import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  username: any;


  constructor(
    private $ngFireAuth: AngularFireAuth,
    private router: Router,
    public alertController: AlertController)
  {}


  deleteUserAccount() {
    this.$ngFireAuth.authState.subscribe(state => {
      state.delete().then(() => {
        this.router.navigate(['/auth/login'])
      }, (error) => {
          console.log(error)
      })
    })
  }

  async openDeleteConfirm() {


    const alert = await this.alertController.create({
      header: 'Deseja continuar?',
      message: 'Atenção: essa operação não poderá ser desfeita.',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          handler: () => {
            console.log('A acao foi cancelada')
          }
        },
        {
          text: 'Sim, excluir conta',
          handler: () => {
            this.deleteUserAccount()
          }
        }
      ]
    })

    await alert.present();
  }

  logout() {
    this.$ngFireAuth.signOut()
  }

  ngOnInit() {
    this.$ngFireAuth.currentUser.then(user => {this.username = user.displayName})
  }

}
