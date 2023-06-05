import { Component, OnInit } from '@angular/core';
import {EquipoService, Equipo} from '../Services/equipo.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  equipo: Equipo={
    id:'',
    nombre:'',
    precio:''
  };

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id;

    this.EquipoService.addEquipo(this.equipo).subscribe();
    this.router.navigate(['/inventario']);
  }

}
