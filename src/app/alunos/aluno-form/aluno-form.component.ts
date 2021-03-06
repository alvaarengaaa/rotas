import { IFormCanDeactivate } from './../../guards/iform-candeactivate';
import { AlunosService } from './../alunos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IFormCanDeactivate {

  id: number;
  inscricao: Subscription;
  aluno: any;
  private formMudou: boolean = false;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.aluno = this.alunosService.getAluno(this.id);
        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair da página?');
    }
    return true;
  }

  podeDesativar() {
    return this.podeMudarRota();
  }
}
