import { Component } from '@angular/core';

@Component({                    //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {              //exportando a classe AppComponent
  tarefasArray:string[] = [];            //criando um array de string


  adicionarTarefa(valor:string){               //criando um método para adicionar tarefas
    this.tarefasArray.push(valor);             //adicionando o valor do input no array
    console.log('Adicionando uma tarefa');
    console.log(`Adiconando a tarefa ${valor}`);
  }

  removerTarefa(valor:string){              //criando um método para remover tarefas
    for (let i = this.tarefasArray.length; i >= 0; i--) {
      if (valor == this.tarefasArray[i]) {
        this.tarefasArray.splice(i, 1);
      }
    }
  }
  constructor(){

  }
  }

