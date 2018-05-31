import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  loginForm: FormGroup;
  UserName: FormControl;
  Password: FormControl;
  error: String;
  loading = false;

  constructor( private authenticationService: AuthenticationService,
               private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.constructForm();
  }

  constructForm() {
    this.loginForm = new FormGroup({
      UserName: this.UserName,
      Password: this.Password
    });
  }

  createFormControls() {
   this.UserName = new FormControl('', Validators.required);
   this.Password = new FormControl('', Validators.required);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  isFieldValid(field: string) {
    return !this.loginForm.get(field).valid && this.loginForm.get(field).touched;
  }

  onSubmit() {
    if (this.loginForm.valid)
  {
    this.loading = true;
    this.authenticationService.login(this.UserName.value, this.Password.value)
        .subscribe(result => {
          if (result === true) {
            this.router.navigate(['Home']);
        } else {
            // login failed
            this.error = 'Username or password is incorrect';
            this.loading = false;
        }
        });
    } else {
      Object.keys(this.loginForm.controls).forEach(field => {
        const control = this.loginForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
    }
  }

}
