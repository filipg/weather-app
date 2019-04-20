import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTabsModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
  ]
})
export class MaterialModule {}