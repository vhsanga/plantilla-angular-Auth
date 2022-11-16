import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { ComponentesModule } from 'src/app/componentes/componentes.module';



@NgModule({
  declarations: [
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    MessageModule,
    MessagesModule,
    ComponentesModule,
  ]
})
export class RegistroModule { }
