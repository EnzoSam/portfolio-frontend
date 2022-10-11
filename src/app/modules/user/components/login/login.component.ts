import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/data/interfaces/iuserLogin';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: IUserLogin
  valid?: boolean;
  constructor(private _authService: AuthService,
    private _tokenService:TokenService,
    private _router: Router) {
    this.login = _authService.newLogn();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.valid = false;
    this._authService.login(this.login).subscribe(response => {
      console.log(response);

      this._tokenService.setToken(response.token);
      this._tokenService.setUserName(response.userName);
      this._tokenService.setAuthorities(response.authorities);
      this._router.navigate(['']).then(() => {
        window.location.reload();
      });
    },
      error => {
        console.log(error);
        if(error.error && error.error.message)
          alert(error.error.message);
        else
          alert('Datos de inicio de sesion invalidos');
      });
  }
}
