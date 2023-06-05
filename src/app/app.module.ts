import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { Routes, RouterModule} from '@angular/router';

// ADICIONANDO LAS PAGINAS home, inventario, pedidos, contactos
import { HomeComponent } from './home/home.component';
import { InventarioComponent } from './inventario/inventario.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BannerComponent } from './banner/banner.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';


const routes: Routes = [
  {
    path: 'home', 
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
  }
];

@NgModule({
  declarations: [
    AppComponent,
    BarraLateralComponent,
    HomeComponent,
    InventarioComponent,
    PedidosComponent,
    ContactosComponent,
    BannerComponent,
    ModalComponent,
    AgregarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
