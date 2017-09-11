import { CursosRoutingModule } from './cursos.routing.module';
import { CursosService } from './cursos.service';
import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule
    ],
    exports: [],
    declarations: [
        CursosComponent,
        CursoDetalheComponent,
        CursoNaoEncotradoComponent
    ],
    providers: [CursosService]
})

export class CursosModule {}
