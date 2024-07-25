import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './pages/signup/signup.component';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ErrorComponent } from './pages/error/error.component';
import { ProfileComponent } from './pages/profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,

    SignupComponent,
     WelcomeComponent,
     ErrorComponent,
     ProfileComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
