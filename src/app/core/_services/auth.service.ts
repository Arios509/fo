import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/userr/user.model';
import { environment } from 'src/app/shared/global';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  postLogin = (form: User) => {
    return this.http.post<User>(`${environment.API_SERVER}/api/user/login`, form)
      .pipe(
        map((res: any) => {
          localStorage.setItem('REFRESH_TOKEN', res.refreshToken);
          localStorage.setItem('ACCESS_TOKEN', res.accessToken);

          return res;
        })
      );
  }

  postSignUp = (form: User) => {
    return this.http.post<User>(`${environment.API_SERVER}/api/user/register`, form)
    .pipe(
      map((res: any) => {
        alert('Success register')
        this.router.navigate(['/login']);
      })
    )
  }

  // refresh token
  renewToken = () => {
    return this.http.post(`${environment.API_SERVER}/api/user/token`,
      { token: localStorage.getItem('REFRESH_TOKEN') }, environment.httpOptions)
      .pipe(map((res: any) => {
        localStorage.setItem('ACCESS_TOKEN', res.accessToken);
      }))
  }

  //logout
  onLogout = () => {
    return this.http.delete(`${environment.API_SERVER}/api/user/logout`, environment.httpOptions)
      .pipe(
        map((res: any) => {
          localStorage.clear()
          alert('Success logout')
          this.router.navigate(['/login'])
        })

      )
  }
}
