import { Component, OnInit } from '@angular/core';
import {EquipoService, Equipo} from '../Services/equipo.service';
import { ModalComponent } from '../modal/modal.component';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  //varibale
  ListarEquipo: Equipo[] | undefined;

  constructor(private EquipoService:EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.listarEquipo();
  }


  listarEquipo()
  {
    this.EquipoService.getEquipos().subscribe({
      next: (res) => {
        console.log(res);
        this.ListarEquipo =<any> res;
      },
      error: (err) => console.log(err)
    });
  }


  eliminar(id: string | undefined)
  {
    console.log('id a eliminar: '+id);
    this.EquipoService.deleteEquipo(<string>id).subscribe(
      res=>{
        console.log('equipo eliminado');
        this.listarEquipo();
      },
      err=> console.log(err)
      );
  }

  modificar(id: string | undefined){
    
    this.router.navigate(['/edit/'+id]);
  }

}
