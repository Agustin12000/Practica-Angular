import { Component, OnInit } from '@angular/core';
import { MateriaABMService } from './../materia-abm.service'
import { Materia } from '../materia.model';
@Component({
  selector: 'app-materia-create',
  templateUrl: './materia-create.component.html',
  styleUrls: ['./materia-create.component.scss']
})
export class MateriaCreateComponent implements OnInit {
  materia:Materia;
  constructor(private materiaABMService:MateriaABMService) { }

  ngOnInit() {
    this.materia = this.materiaABMService.nuevaMateria();
  }
  nuevaMateria(): void{
    this.materiaABMService.agregarMateria(this.materia);
    this.materia = this.materiaABMService.nuevaMateria();
    
  }
}
