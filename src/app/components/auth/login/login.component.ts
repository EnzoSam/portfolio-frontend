import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/data/interfaces/iuser';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser
  valid?:boolean;
  constructor(private _authService:AuthService,
              private _router:Router) { 
    this.user = _authService.newUser();
  }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.valid = false;
    this._authService.login(this.user).subscribe(response=>
      {
        console.log(response);
          if(response === true)
          {
            this._authService.rememberToken("ok");
            this._router.navigate(['']).then(() => {
              window.location.reload();
            });
          }
      },
      error=>
      {
          console.log(error);
      });
  }
}
