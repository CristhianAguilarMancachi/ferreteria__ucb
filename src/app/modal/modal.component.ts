import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() public newItemAdded = new EventEmitter<any>();
  @Output() public closeModal = new EventEmitter<void>();

  public newItem: any = {
    name: '',
    price: 0
  };

  public onAddItem(): void {
    this.newItemAdded.emit(this.newItem);
    this.newItem = {
      name: '',
      price: 0
    };
  }

  public onCloseModal(): void {
    this.closeModal.emit();
  }
}
