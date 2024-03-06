import { CanActivateFn } from '@angular/router';

export const mfaGuard: CanActivateFn = (route, state) => {
  return true;
};
