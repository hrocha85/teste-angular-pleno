import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Teste de Desenvolvimento';


  public termo:any;
  public listaDeFilmes:any;
  public listaVazia = true;


  constructor(public data: DataService) {}

  ngOnInit() {

    this.data.buscarfilmes().toPromise().then(ret => {
      console.log(ret)
      this.listaDeFilmes = ret

    })
  }




  buscar(termo: string) {
    termo = termo.toLocaleLowerCase();
    if (termo == "" ){
      this.data.buscarfilmes().toPromise().then(ret => {
        console.log(ret)
        this.listaDeFilmes = ret
        this.listaVazia = true
      })
    } else{
     this.listaDeFilmes = this.listaDeFilmes.filter((product: any) =>
      this.listaVazia = product.nome.toLocaleLowerCase().indexOf(termo) !== -1);
    }

}




}



