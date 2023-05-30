import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path: '', 
  component: HomeComponent
},
{
  path: 'inventario', 
  component: InventarioComponent
},
{
  path: 'pedidos', 
  component: PedidosComponent
},
{
  path: 'contactos', 
  component: ContactosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
