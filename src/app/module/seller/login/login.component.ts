import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private subs: Subscription[] = [];

  constructor(private fb: FormBuilder, private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.checkLogin();
    this.initialLoginForm();
  }


  checkLogin = () => {
    const accessToken = localStorage.getItem('ACCESS_TOKEN');

    if(accessToken) return this.router.navigate(['/home/product']);

  }
  initialLoginForm = () => {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    })
  }

  onSubmit = () => {
    const form = {
      email: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value
    };

    this.subs.push(
      this._authService.postLogin(form).subscribe(res => {
        this.router.navigate(['/home/product'])
      })
    )
  }
}
