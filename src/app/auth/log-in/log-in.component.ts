import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  currentUser = {};
  loginForm = this.formBuilder.group({
    email: [''],
    password: ['']
  })

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) { }


  onSubmit() {
    this.authService.userLogIn(this.loginForm.value).subscribe(
      (data: any) => {
        console.log('return value token', data.token)
        if (data.token) {
          this.router.navigate(['/user'])
          window.localStorage.setItem('token', data.token)
        }
      }
    )
  }

}
