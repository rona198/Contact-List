import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// firebase credentials
var firebaseConfig = {
    apiKey: "AIzaSyAlvo8X2TtJ3P286BSxHzO1oOiAzhM81ec",
    authDomain: "contact-list-643ac.firebaseapp.com",
    databaseURL: "https://contact-list-643ac.firebaseio.com",
    projectId: "contact-list-643ac",
    storageBucket: "contact-list-643ac.appspot.com",
    messagingSenderId: "112073120052"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule                
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
