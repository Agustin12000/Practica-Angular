import { Injectable } from '@angular/core';
import { Materia } from './materia.model';

@Injectable()
export class MateriaABMService {
  private materias:Materia[];
  constructor() {
    this.materias = [];
  }
  getMaterias(){
    return this.materias;
  }
  agregarMateria(materia:Materia): void{
    console.log(materia)
    fetch('http://localhost:3001/materia',
        {method: 'POST', 
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(materia)
        })
      .then(response => {
        if (response.status === 201) {
            return response.json();
        } else {
            throw new Error('Something went wrong on api server!');
        }
      })
      .then(response => {
        console.debug(response);
      }).catch(error => {
        console.error(error);
      });
  }
  nuevaMateria(): Materia {
    return {
      id: 0,
      name: '',
      description: '',
      duration: 0,
      totalHours: 0,
      correlativas: []
    };
  }
}
