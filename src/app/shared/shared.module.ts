import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { InfoPopupComponent } from './popup/info-popup/info-popup.component';
import { LoaderComponent } from './popup/loader/loader.component';
import { WarningPopupComponent } from './popup/warning-popup/warning-popup.component';
import { AddStudentComponent } from './popup/add-student/add-student.component';

@NgModule({
  declarations: [
    InfoPopupComponent,
    LoaderComponent,
    WarningPopupComponent,
    SearchFilterPipe,
    AddStudentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    InfoPopupComponent,
    LoaderComponent,
    WarningPopupComponent,
    SearchFilterPipe,
    AddStudentComponent
  ]
})
export class SharedModule { }
