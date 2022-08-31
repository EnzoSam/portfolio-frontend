import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routesPaths } from 'src/app/data/constants/routes';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  routesPaths: any;
  constructor(private _authService: AuthService,
    private _router: Router) {
    this.routesPaths = routesPaths;
  }

  ngOnInit(): void {
  }

  isAuthenticated(): boolean {
    return this._authService.isAuthenticated();
  }

  logout() {
    this._authService.logout();
    this._router.navigate(['']).then(() => {
      window.location.reload();
    });
  }

}
