import { CursoNaoEncotradoComponent } from './cursos/curso-nao-encotrado/curso-nao-encotrado.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'cursos', component: CursosComponent},
    { path: 'curso/:id', component: CursoDetalheComponent},
    { path: 'nao-encontrado', component: CursoNaoEncotradoComponent }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
