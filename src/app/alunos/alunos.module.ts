import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.routing.module';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AlunosRoutingModule
    ],
    exports: [],
    declarations: [
        AlunosComponent,
        AlunoFormComponent,
        AlunoDetalheComponent
    ],
    providers: [AlunosService]
})

export class AlunosModule { }
