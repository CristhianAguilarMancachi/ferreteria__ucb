import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  public items: any[] = [];

  public showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  public openModal(): void {
    this.showModal = true;
  }

  public closeModal(): void {
    this.showModal = false;
  }

  public addItem(newItem: any): void {
    this.items.push(newItem);
    this.closeModal();
  }

  public deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
