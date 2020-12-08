import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BlogComponent } from './blog/blog.component';
import { EstiloComponent } from './estilo/estilo.component';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        BlogComponent,
        EstiloComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }