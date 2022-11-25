class TarefasLista {
  private _tarefas: Tarefa[];

  constructor() {
    this._tarefas = [];
  }

  adicionar(tarefa: Tarefa) {
    this._tarefas.push(tarefa);
  }

  get tarefas() {
    return this._tarefas;
  }
}


const tarefasLista = new TarefasLista();

const t1 = new Tarefa('Comprar pão', new Date(2022, 10, 1));
const t2 = new Tarefa('Comprar café', new Date(2022, 10, 2));
const t3 = new Tarefa('Comprar bolo', new Date(2022, 10, 3));

tarefasLista.adicionar(t1);
tarefasLista.adicionar(t2);
tarefasLista.adicionar(t3);

tarefasLista.tarefas.map(tarefa => {
  console.log(tarefa.descricao);
});