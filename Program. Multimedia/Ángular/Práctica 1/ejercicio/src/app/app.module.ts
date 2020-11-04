import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);