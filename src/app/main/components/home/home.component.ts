import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private $ngFireAuth: AngularFireAuth, private router: Router) { }


  logout() {
    this.$ngFireAuth.signOut().then(
      () => {
        this.router.navigate(['/auth/login'])
      }
    )
  }

  ngOnInit() {}

}
