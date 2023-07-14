// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';

const routes: Routes = [
  // outras rotas
  { path: 'agendamentos', component: AgendamentosComponent },
  // outras rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
