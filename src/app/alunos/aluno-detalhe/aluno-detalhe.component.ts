import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Aluno } from './../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: Aluno;

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
  constructor(
    private alunosService: AlunosService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.inscricao = this.route.data.subscribe(
      (info: { aluno: Aluno }) => {
        console.log('recebendo o obj Aluno do resolver');
        this.aluno = info.aluno;
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
