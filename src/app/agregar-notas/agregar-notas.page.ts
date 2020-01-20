import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotasSQLiteService } from '../notas-sqlite.service';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.page.html',
  styleUrls: ['./agregar-notas.page.scss'],
})
export class AgregarNotasPage implements OnInit {

  public formGroup: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private notasService: NotasSQLiteService
  ) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      });
  }

  public agregarNotas() {
    const data = {
      titulo: this.formGroup.value.titulo,
      descripcion: this.formGroup.value.descripcion
    };
    console.log(data);
    this.notasService.agregarNotas(data)
    .then(res => {
      this.router.navigate(['/tabs/tab1']);
    })
    .catch(err => {
      console.log(err);
    });
  }


}
