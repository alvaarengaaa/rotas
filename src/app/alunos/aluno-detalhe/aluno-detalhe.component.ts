import { Subscription } from 'rxjs/Subscription';
import { AlunosService } from './../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  id: number;
  inscricao: Subscription;
  aluno: any;

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
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
          this.router.navigate(['nao-encontrado']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
