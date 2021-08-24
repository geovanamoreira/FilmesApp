import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CruelaPageRoutingModule } from './cruela-routing.module';

import { CruelaPage } from './cruela.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CruelaPageRoutingModule
  ],
  declarations: [CruelaPage]
})
export class CruelaPageModule {}
