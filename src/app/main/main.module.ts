import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireAuthGuardModule} from '@angular/fire/auth-guard'


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class MainModule { }
