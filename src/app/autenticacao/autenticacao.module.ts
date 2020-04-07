import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AutenticacaoRoutingModule } from './autenticacao-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule} from '@angular/fire/auth-guard'
import { RegisterComponent } from './componentes/register/register.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AutenticacaoRoutingModule,
    // ReactiveForms é um módulo de formulários do Angular que oferece uma
    // série de ferramentas para que o desenvolvedor possa criar formulários
    // usando os validadores e outras ferramentas
    ReactiveFormsModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireAuthGuardModule
  ]
})
export class AutenticacaoModule { }
