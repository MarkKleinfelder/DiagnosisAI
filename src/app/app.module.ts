import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { QAComponent } from './q-a/q-a.component';
import { ChatComponent } from './chat/chat.component';
import { LinksComponent } from './links/links.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    QAComponent,
    ChatComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot([
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
