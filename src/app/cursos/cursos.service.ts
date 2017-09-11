import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'AngularJS'},
      {id: 3, nome: 'C#'},
      {id: 4, nome: 'Python'}
    ];
  }

  getCurso(id: number) {
    const cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      const curso = cursos[i];
      // tslint:disable-next-line:triple-equals
      if (curso.id == id) {
        return curso;
      }
    }
    return null;
  }
}
