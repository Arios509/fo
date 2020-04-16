import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
    console.log('ererara')
  }

  onLogout = () => {
    console.log('her')
    this._authService.onLogout().subscribe(res => {
      
    })
  }


}
