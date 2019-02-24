import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
// import { AuthService } from '../auth.service';
import { ApiService } from 'src/services/api.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private apiService: ApiService, private router: Router ) { }

canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean> | boolean {
  // if the token exists, then give access to everything
  if ( this.apiService.token ) { return true; } else { return false ; }
}



}
