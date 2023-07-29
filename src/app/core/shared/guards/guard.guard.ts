import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuserService } from 'src/app/auth/services/auser.service';

export const  canActivate:CanActivateFn =(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>
  {
    
    const _Auth = inject(AuserService)
    const _Router = inject(Router)

    
if (_Auth.userToken.getValue() !== null) {
  return true;
} else {
  _Router.navigate(['/auth/home/login'])
  return false;
}

}
