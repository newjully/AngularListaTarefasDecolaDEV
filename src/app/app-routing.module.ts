import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarefasDetalheComponent } from './tarefas-detalhe/tarefas-detalhe.component';
import { TarefasListaComponent } from './tarefas-lista/tarefas-lista.component';

const routes: Routes = [
  {path:'lista',component: TarefasListaComponent},
  {path: 'detalhe/:id', component: TarefasDetalheComponent},
  {path:'**', redirectTo: 'lista'}// redireciona para a rota lista
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
