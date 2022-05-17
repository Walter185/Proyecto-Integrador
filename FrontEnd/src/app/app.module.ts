import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EduExpComponent } from './components/edu-exp/edu-exp.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioService } from './services/portfolio.service';
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { SkillsComponent } from './components/skills/skills.component';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    NavbarComponent,
    AboutmeComponent,
    AppComponent,
    EduExpComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    SkillsComponent,
    ProfileComponent,
    RegisterComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressBarModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
