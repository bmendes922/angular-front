import { Router } from '@angular/router';
import { EmpregadoService } from './../empregado.service';

import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';

@Component({
  selector: 'app-empregado-list',
  templateUrl: './empregado-list.component.html',
  styleUrls: ['./empregado-list.component.css']
})
export class EmpregadoListComponent implements OnInit {

  empregados: Empregado[] = [];

  constructor(private empregadoService = EmpregadoService, private router: Router) {

  }

  ngOnInit(): void {

    this.getEmpregados();

  }

  private getEmpregados() {
    this.empregadoService.getEmpregadoList().subscribe((data: Empregado[]) => {

      this.empregados = data;
    });

  }
  empregadoDetails(id: number){
    this.router.navigate(['funcionario-detalhes', id]);

  }
  atualizarEmpregado(id: number) {

    this.router.navigate(['atualizar-funcionario', id]);
  }
  deletarEmpregado(id: number) {
    this.empregadoService.deletarEmpregado(id).subscribe(data => {
      console.log(data);
      this.getEmpregados();
    });
  }

}
