import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { GirlsComponent } from './girls/girls.component';
import { GoingPlacesComponent } from './going-places/going-places.component';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ContactsComponent,
    GirlsComponent,
    GoingPlacesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
