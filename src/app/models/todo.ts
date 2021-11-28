export class Todo {

  private _id:string;
  constructor(public text:string){}

  set id(id:string){
    this._id = id;
  }

  get id(){
    return this._id;
  }
}
