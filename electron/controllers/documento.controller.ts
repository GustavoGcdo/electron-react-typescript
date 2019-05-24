export class DocumentoController {
  constructor(private _id: string, private numero: number) {}

  teste() {
    this._id = 'DocumentoController.teste';
    console.log(this._id);
    
  }
}
