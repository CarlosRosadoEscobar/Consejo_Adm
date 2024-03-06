import { inject } from '@angular/core';
import { GuardsService } from './../services/guards.service';
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(GuardsService)
  return authService.getAuthToke();
};
