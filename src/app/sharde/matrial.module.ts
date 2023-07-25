import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatListModule } from '@angular/material/list';

const PrimeNgComponents = [
  MatTableModule,
  MatSidenavModule,
  MatGridListModule,
  MatMenuModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatExpansionModule,
  MatToolbarModule,
  MatBadgeModule,
  MatSnackBarModule,
  MatListModule,
];

@NgModule({
  imports: [PrimeNgComponents],
  exports: [PrimeNgComponents],
})
export class AngularMaterialModule {}
