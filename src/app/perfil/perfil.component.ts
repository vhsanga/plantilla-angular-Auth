import { Component, OnInit } from '@angular/core';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any;
  constructor(private storageService: StorageService) { }

  ngOnInit(): void {
    this.usuario = this.storageService.getUser().user;
    console.log(this.usuario)
  }

}
