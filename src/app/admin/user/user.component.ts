import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  constructor(private fb : FormBuilder, private authService : AuthService){}
  ngOnInit(){
    this.authService.getAuthToken()
  }
  userForm : FormGroup = this.fb.group({
    first_name:[''],
    last_name:[''],
    gender:[''],
    email:[''],
    adress:[''],
    birthDate:[''],
    actif:[''],
    gsm:[''],
    grade:[''],
    status:['']
  })

}
