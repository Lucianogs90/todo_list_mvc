class TarefaView{
  private _tabela: HTMLTableElement;
  private _inputDescricao: HTMLInputElement;
  private _inputData: HTMLInputElement;
  private _btnAdicionar: HTMLButtonElement;

  constructor(){
    this._tabela = document.querySelector('#tabela-tarefas')!;
    this._inputDescricao = document.querySelector('#descricao')!;
    this._inputData = document.querySelector('#data')!;
    this._btnAdicionar = document.querySelector('#btn-adicionar')!;

    // this._btnAdicionar.addEventListener('click', )
  }
}