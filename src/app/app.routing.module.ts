import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'cursos',
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard] },
    { path: 'alunos',
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        // canActivateChild: [AlunosGuard],
        canLoad: [AuthGuard] },
    { path: 'login', component: LoginComponent},
    { path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
