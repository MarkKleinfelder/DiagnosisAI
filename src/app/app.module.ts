import { MaterializeModule, MaterializeDirective } from 'angular2-materialize';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import 'materialize-css'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { QAComponent } from './q-a/q-a.component';
import { ChatComponent } from './chat/chat.component';
import { LinksComponent } from './links/links.component';

import { PatientDetailsComponent } from './patient-details/patient-details.component'
import { PatientService }  from './patient.service';
import { WelcomeComponent } from './welcome/welcome.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    QAComponent,
    ChatComponent,
    LinksComponent,
    PatientDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: WelcomeComponent
      },

      {
        path:'profile',
        component: ProfileComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'signup',
        component: SignupComponent
      },
      {
        path:'qa',
        component: QAComponent
      },
      {
        path:'chat',
        component: ChatComponent
      }

      ])
    

  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
