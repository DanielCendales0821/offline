import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarNotasPageRoutingModule } from './agregar-notas-routing.module';

import { AgregarNotasPage } from './agregar-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AgregarNotasPageRoutingModule
  ],
  declarations: [AgregarNotasPage]
})
export class AgregarNotasPageModule {}
