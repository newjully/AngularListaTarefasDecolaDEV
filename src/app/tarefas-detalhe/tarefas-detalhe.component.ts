import { ITarefaDto } from './../interfaces/iTarefaDto';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.component.html',
  styleUrls: ['./tarefas-detalhe.component.css']
})
export class TarefasDetalheComponent {
  tarefaDto: ITarefaDto = { id:0, nome: '' };

  //criar um método para atualizar uma tarefa
  AtualizarTarefa(){
    //atualizar a informação da tarefa
    //redirecionar para a página de listagem de tarefas
    this.router.navigate(['lista']);

  }

  constructor(private route: ActivatedRoute, private router: Router) {
    let idRecebido: number;
    this.route.paramMap.subscribe(params => {
      idRecebido = Number(params.get('id'));
    console.log(`Id que recebi para detalhare atualizar as informações: ${idRecebido}`);
    });
  }
}

