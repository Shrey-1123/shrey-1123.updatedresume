import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { NavComponent } from './nav/nav.component';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccomplishmentComponent } from './accomplishment/accomplishment.component';
import { SkillsComponent } from './skills/skills.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    HeadersComponent,
    FootersComponent,
    AccomplishmentComponent,
    SkillsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(), // It is necessary forRoot(), otherwise it will show no Providers 
    CarouselModule
    



   
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
