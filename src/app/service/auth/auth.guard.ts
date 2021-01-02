import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { isNull } from 'util';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router
  ) { }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
      // Récupération de l'utilisateur connecté
    const password = isNull(localStorage.getItem('user'));
    if (!password) {
      // Si pas d'utilisateur connecté : redirection vers la page de login
      console.log('Vous n\'êtes pas connectés');
      this.router.navigate(['/login']);
    }
    return password;
  }
  
}