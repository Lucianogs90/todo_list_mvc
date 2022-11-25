class Tarefa{
  private _descricao: String;
  private _data: Date;
  private _concluida: boolean;

  constructor(descricao: String, data: Date){
    this._descricao = descricao;
    this._data = data;
    this._concluida = false;
  }

  get descricao(){
    return this._descricao;
  }

  get data(){
    return this._data;
  }

  get concluida(){
    return this._concluida;
  }

  set descricao(desc: String){
    this._descricao = desc;
  }

  set data(dt: Date){
    this._data = dt;
  }

  set concluida(concluida: boolean){
    this._concluida = concluida;
  }
}
