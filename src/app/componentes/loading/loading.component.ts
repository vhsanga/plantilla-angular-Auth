import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  display:boolean = false;
  mensaje:string = "Espere"
  constructor() { }

  ngOnInit(): void {
  }

  showLoading(){
    this.display = true;
  }

  hideLoading(){
    this.display = false;
  }

}
