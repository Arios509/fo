import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/_services/auth.service';
import { MustMatch } from 'src/app/core/_helpers/must-match';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  submitted = false;
  constructor(private _authService: AuthService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initialForm();
  }

  initialForm = () => {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.minLength(6), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(6), Validators.required]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: MustMatch('password', 'confirmPassword')
    })
  }

  get f() { return this.signUpForm.controls };

  onSubmit = () => {
    this.submitted = true;
    if (this.signUpForm.invalid) return;
    const form = {
      name: this.f.name.value,
      email: this.f.email.value,
      password: this.f.password.value
    }

    this._authService.postSignUp(form).subscribe(res => {

    },err => {
      alert(err.error.message)
    })
  }
}
