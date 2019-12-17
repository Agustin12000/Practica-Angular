import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MateriaAbmComponent } from './materia-abm/materia-abm.component';
import { MateriaCreateComponent } from './materia-create/materia-create.component';
import { FormsModule } from '@angular/forms';
import { MateriaABMService } from './materia-abm.service';


@NgModule({
  declarations: [MateriaAbmComponent, MateriaCreateComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[MateriaAbmComponent, MateriaCreateComponent],
  providers: [
    MateriaABMService
  ]
})
export class MateriaAbmModule { }

