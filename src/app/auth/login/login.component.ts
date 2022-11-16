import { Component, ViewChild, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from 'src/app/componentes/loading/loading.component';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `],
    providers: [ MessageService ],
    
})
export class LoginComponent {
    @ViewChild(LoadingComponent) loadingComponent!: LoadingComponent;

    form: any = {
        username: null,
        password: null
      };
      isLoggedIn = false;
      isLoginFailed = false;
      errorMessage = '';
      roles: string[] = [];
    
      constructor(
        private messageService: MessageService, 
        public layoutService: LayoutService, 
        private authService: AuthService, 
        private storageService: StorageService, 
        private router: Router
      ) { }
    
      ngOnInit(): void {
        if (this.storageService.isLoggedIn()) {
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          this.router.navigate(['/home']);
        }
        
      }
    
    
      onSubmit(): void {
        this.loadingComponent.showLoading();
        const { username, password } = this.form;
        this.messageService.clear();
        this.authService.login(username, password).subscribe({
          next: data => {
            this.storageService.saveUser(data);
    
            this.isLoginFailed = false;
            this.isLoggedIn = true;
            this.roles = this.storageService.getUser().roles;
            this.router.navigate(['/home']);
          },
          error: err => {
            this.loadingComponent.hideLoading();
            console.log(err);
            this.isLoginFailed = true;
            try {
                let msg =  err.error.error.message;
                if ( typeof msg === "string" ){
                this.messageService.add({severity:'error',  detail:msg});  
                }else{
                    msg.every((m: any) => this.messageService.add({severity:'error',  detail:m}));  
                }       
            } catch (error) {
                let msg =  err.message;
                this.messageService.add({severity:'error',  detail:msg}); 
                console.log()
            }
          }
        });
      }
    
      reloadPage(): void {
        window.location.reload();
      }
}
