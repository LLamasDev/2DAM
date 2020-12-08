import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ServicioService } from './../servicio/servicio.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private ServicioService: ServicioService, private router: Router) {
    }
    
    ngOnInit(): void {
        this.loginForm = new FormGroup({
            usuario: new FormControl ('', Validators.required),
            password: new FormControl ('', [Validators.required, Validators.minLength(8)])
        });
    }
    
    autenticaUsuario() {
        this.router.navigate(['blog']);
    }
}