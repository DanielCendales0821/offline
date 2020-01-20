import { Component } from '@angular/core';
import { NotasSQLiteService } from '../notas-sqlite.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public listado: any = [];
  constructor(
    private notasService: NotasSQLiteService
  ) { this.listar(); }

  buscar(event) {
    const valor = event.target.value;
    console.log(valor);
  }
  listar() {
    this.notasService.listarNotas()
      .then(res => {
        this.listado = res;
      }).catch(err => {
        console.log(err);
      });
  }
}
