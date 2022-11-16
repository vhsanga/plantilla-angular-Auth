import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../_services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class GuardAuthGuard implements CanActivate {

  constructor(private storageService: StorageService, private router: Router) { }


  canActivate(){
    console.log("evaluando guard")
    if (!this.storageService.isLoggedIn()) {
      this.router.navigate(['/']);
      console.log("falsa")
      return false;
    }
    console.log("true")
    return true;
  }  
  
}
