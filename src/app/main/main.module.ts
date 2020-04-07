import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireAuthGuardModule} from '@angular/fire/auth-guard'
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent, EditProfileComponent],
  imports: [
    CommonModule,
    IonicModule,
    MainRoutingModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }
