import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from 'src/app/admin/user.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

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
    private router: Router,
    
    ) { }



    
  onSubmit() {
    this.authService.userLogIn(this.loginForm.value).subscribe(
      (data: any) => {
        console.log('return value token', data)
        window.localStorage.setItem('token', data.token)
        this.authService.verifiedUser(data.token).subscribe(
          res => {
              console.log(res)
              if (res.status ==='member') {
                this.router.navigate(['/admin/user'])
              } else {
                  this.router.navigate(['/'])
              }
          }
        )
      }
    )
  }

}





