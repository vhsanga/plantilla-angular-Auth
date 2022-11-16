import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { LayoutService } from "./service/app.layout.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService, 
        private storageService: StorageService, 
        private authService: AuthService, 
        private router: Router) { }

    logout(): void {
        this.storageService.clean();
        window.location.reload();
        
        /*this.authService.logout().subscribe({
          next: res => {
            console.log(res);
            this.storageService.clean();
            window.location.reload();
          },
          error: err => {
            console.log(err);
          }
        });*/
      }
}
