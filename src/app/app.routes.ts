import { Routes } from '@angular/router';
import { HomeComponents } from './home/home';
import { CursoComponents } from './curso/curso';

export const routes: Routes = [
    {path: 'home', component:HomeComponents},
    {path: 'curso', component:CursoComponents},
    {path: '', redirectTo:'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},
];
