import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatDividerModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatDividerModule,
  ]
})
export class MaterialModule {}