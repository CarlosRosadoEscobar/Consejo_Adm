import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthServiceService } from '../../data/services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {

  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticatedUser()) {
      return true; // Permitir acceso si el usuario está autenticado
    } else {
      this.router.navigate(['/login']);
      return false; // No permitir acceso a la ruta
    }
  }
}
