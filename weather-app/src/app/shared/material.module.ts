import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
  ]
})
export class MaterialModule {}