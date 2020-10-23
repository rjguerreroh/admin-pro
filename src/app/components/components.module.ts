import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrementadorComponent,
    DonaComponent
  ]
})
export class ComponentsModule { }
