import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoadingComponent } from 'src/app/componentes/loading/loading.component';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  providers: [ MessageService ]
})
export class RegistroComponent implements OnInit {
  @ViewChild(LoadingComponent) loadingComponent!: LoadingComponent;

  form: any = {
    username: null,
    email: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(
    public layoutService: LayoutService, 
    private authService: AuthService, 
    private messageService: MessageService,
    private storageService: StorageService,  
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    this.loadingComponent.showLoading();
    const usuario = this.form;
    this.messageService.clear();
    this.authService.register(usuario).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.messageService.add({severity:'success',  detail:data.msg});
        console.log(data.msg)
        this.loadingComponent.hideLoading();
      },
      error: err => {
        this.loadingComponent.hideLoading();
        try {
          let msg =  err.error.error.message;
          if ( typeof msg === "string" ){
          this.messageService.add({severity:'error',  detail:msg});  
          }else{
            msg.every((m: any) => this.messageService.add({severity:'error',  detail:m}));  
          }       
          this.isSignUpFailed = true;
        } catch (error) {
          let msg =  err.message;
          this.messageService.add({severity:'error',  detail:msg});  
        }
        
      }
    });
  }
}
