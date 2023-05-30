import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
  
})
export class PedidosComponent {
  public nombre: string = '';
  public telefono: string;
  public correo: string = '';
  public direccion: string = '';
  public producto: string = '';

  constructor() {
    // Asignar valores iniciales si es necesario
    this.nombre = '';
    this.telefono = '';
    this.correo = '';
    this.direccion = '';
    this.producto = '';
  }

  submitPedido(): void {
    // Lógica para enviar el pedido
  }
}
