import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'pruthvi-firm-login-container',
  styleUrls: ['./login.component.scss'],
  templateUrl: 'login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent{

  public loginForm: FormGroup;
  public submitted: boolean = false;

  constructor( private fb: FormBuilder, private router: Router){
    localStorage.removeItem('id_token');
    this.loginForm = fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  get username(){
    return this.loginForm.get('username') as FormControl;
  }

  get password(){
    return this.loginForm.get('password') as FormControl;
  }

  login(){
    this.submitted = true;
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password
    if(username && password){
      this.loginForm.controls.username.setValue(this.loginForm.value.username);
      this.loginForm.controls.password.setValue(this.loginForm.value.password);
      localStorage.setItem('id_token', "accesss_token");
      this.router.navigate(['/main']);
    }
  }
}
