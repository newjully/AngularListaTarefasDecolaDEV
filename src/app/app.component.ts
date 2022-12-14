import { ITarefaDto } from './interfaces/iTarefaDto';
import {
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { trigger, transition, style, animate, keyframes } from '@angular/animations';

@Component({                    //decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger("moveInLeft", [transition("void=> *", [style({transform: "translateX(300px)"}), animate(200, style({transform: "translateX(300px)"}))]),
  transition("*=>void", [style({transform: "translateX(0px)"}), animate(100, keyframes([style({})]))])])],
})
export class AppComponent {                //exportando a classe AppComponent
  listaTarefaTipada: ITarefaDto[] = [];    //criando um array de string
  idBancoFake: number = 1;
  tarefaNomeModel: string = '';
  @ViewChild("tarefa") inputNomeTarefa!: ElementRef;

  adicionarTarefa(valor:string){               //criando um método para adicionar tarefas
    this.listaTarefaTipada.push({id: this.idBancoFake, nome: valor}); //adicionando o valor do input no array
    this.idBancoFake++;
    console.log(`Adiconando a tarefa ${valor}`);
    console.log(`Indice da Tarefa: ${this.idBancoFake}`)

    this.tarefaNomeModel = '';
    this.inputNomeTarefa.nativeElement.focus();
  }

  removerTarefa(id:number){              //criando um método para remover item iguais por objeto
    for (let i = 0; i < this.listaTarefaTipada.length; i++) {
      if (id == this.listaTarefaTipada[i].id) {
      this.listaTarefaTipada.splice(i, 1);
      console.log(`Removendo a tarefa pelo id: ${id}`);
      }
    }
  }

  submitFormularioTarefa(valorFormulario: any){
    console.log(`Valor do Formulário: ${JSON.stringify(valorFormulario)}`);
    this.adicionarTarefa(valorFormulario.tarefa);
  }

  constructor(){

  }
}

