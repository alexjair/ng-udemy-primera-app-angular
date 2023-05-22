import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService
  ) { }

  funLogin(form: NgForm){
    console.log("funLogin()", form.value);
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.funLoginServ(email, password);
  }

  ngOnInit(): void {
  }

}
