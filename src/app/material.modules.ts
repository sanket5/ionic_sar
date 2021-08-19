
import { NgModule } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card'
import {MatStepperModule} from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatListModule } from '@angular/material/list'

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table/';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';

import { MatDialogModule } from '@angular/material/dialog'
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';


import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete'






@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatSortModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatAutocompleteModule
  ],
  exports:[
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatStepperModule,
    MatSidenavModule,
    MatTableModule,
    MatExpansionModule,
    MatSelectModule,
    MatDialogModule,
    MatSortModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatAutocompleteModule
    
  ]
})
export class MaterialModule { }
