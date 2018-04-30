import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';

const MATERIAL_MODULES = [
  MatListModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  declarations: []
})
export class MaterialModule { }
