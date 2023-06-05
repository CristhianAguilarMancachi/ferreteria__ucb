import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {EquipoService, Equipo2} from '../Services/equipo.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  
})
export class PedidosComponent {

  equipo: Equipo2={
    id:'',
    nombre:'',
    numero:'',
    correo:'',
    direccion:'',
    producto:''
  };

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
    delete this.equipo.id;

    this.EquipoService.addEquipo2(this.equipo).subscribe();
    this.equipo.nombre = '';
    this.equipo.numero = '';
    this.equipo.correo = '';
    this.equipo.direccion = '';
    this.equipo.producto = '';
    this.router.navigate(['/pedidos']);
  }

}
