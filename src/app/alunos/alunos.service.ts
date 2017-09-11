import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    {id: 1, nome: 'Arthur Damaceno', email: 'arthur.andrade@cedrotech.com'},
    {id: 2, nome: 'Cecília Carneiro', email: 'cecilia.carneiro@cedrotech.com'},
    {id: 3, nome: 'Daniel da Costa', email: 'daniel.costa@cedrotech.com'},
    {id: 4, nome: 'Igor Alvarenga', email: 'igor.alvarenga@cedrotech.com'},
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number) {
    const alunos = this.getAlunos();
    for (let i = 0; i < alunos.length; i++) {
      const aluno = alunos[i];
      // tslint:disable-next-line:triple-equals
      if (aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }

  constructor() { }

}
