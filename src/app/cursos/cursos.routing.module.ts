import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { CursoNaoEncotradoComponent } from './curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent},
    { path: 'nao-encontrado', component: CursoNaoEncotradoComponent },
    { path: ':id', component: CursoDetalheComponent }
];

@NgModule ({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}
