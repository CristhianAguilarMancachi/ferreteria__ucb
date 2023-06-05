import { Component, OnInit } from '@angular/core';
import { Equipo, EquipoService } from '../Services/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  equipo: Equipo = {
    id: '',
    nombre: '',
    precio: ''
  };

  equipo2: Equipo = {
    id: '',
    nombre: '',
    precio: ''
  };

  id_entrada: string = ''; // Variable global para almacenar el valor de id_entrada

  constructor(
    private EquipoService: EquipoService,
    private router: Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_entrada = <string>this.activeRoute.snapshot.params['id'];
    console.log('id de entrada: ' + this.id_entrada);

    if (this.id_entrada) {
      this.EquipoService.getUnEquipo(this.id_entrada).subscribe({
        next: (res) => {
          console.log('res: ',res);
          this.equipo = <Equipo>res;
        },
        error: (err) => console.log(err)
      });
    }
  }

  modificar() {
    delete this.equipo.id;

    console.log('this.equipo.id: ', this.id_entrada);
    this.EquipoService.editEquipo(this.id_entrada, this.equipo).subscribe({
      next: (res) => {
        console.log('producto: ', this.id_entrada);
        console.log(res);
      },
      error: (err) => console.log(err)
    });

    this.router.navigate(['/inventario']);
  }

}
