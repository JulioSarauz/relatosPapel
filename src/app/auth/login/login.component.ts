import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

    login() {
    const { username, password } = this.loginForm.value;
    if (username && password) {
      // Aquí podrías validar contra un backend
      // Suponemos validación exitosa
      this.router.navigate(['/home']); // Cambia '/home' por tu ruta real
    }
  }
}
