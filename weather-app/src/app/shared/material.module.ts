import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
  ]
})
export class MaterialModule {}