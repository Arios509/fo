import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/userr/user.model';
import { environment } from 'src/app/shared/global';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

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

  // refresh token
  renewToken = () => {
    return this.http.post(`${environment.API_SERVER}/api/user/token`,
      { token: localStorage.getItem('REFRESH_TOKEN') }, environment.httpOptions)
      .pipe(map((res: any) => {
        localStorage.setItem('ACCESS_TOKEN', res.accessToken);
      }))
  }
}
