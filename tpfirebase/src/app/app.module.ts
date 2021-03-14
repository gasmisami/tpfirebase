import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyB9kmBnAuNHaoGvyFiUDlCBsGxzVu-_2Cs",
      authDomain: "tpfirebase-bc604.firebaseapp.com",
      projectId: "tpfirebase-bc604",
      storageBucket: "tpfirebase-bc604.appspot.com",
      messagingSenderId: "798179052367",
      appId: "1:798179052367:web:6508006962d27f187c533a"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
