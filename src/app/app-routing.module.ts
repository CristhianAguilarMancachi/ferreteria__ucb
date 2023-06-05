import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventarioComponent } from './inventario/inventario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { HomeComponent } from './home/home.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';

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
},
{path:'add', component:AgregarComponent},
{path:'edit/:id', component:ModificarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
