import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import {DialogModule} from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';


@NgModule({
  declarations: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    ProgressSpinnerModule
  ],
  exports: [
    LoadingComponent
  ]
})
export class ComponentesModule { }
