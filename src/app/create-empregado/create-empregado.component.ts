import { Router, Routes } from '@angular/router';
import { EmpregadoService } from './../empregado.service';
import { Empregado } from './../empregado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-empregado',
  templateUrl: './create-empregado.component.html',
  styleUrls: ['./create-empregado.component.css']
})
export class CreateEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  constructor(private empregadoService : EmpregadoService, private router: Router) { }

  ngOnInit(): void {
  }
  saveEmpregado(){
    this.empregadoService.createEmpregado(this.empregado).subscribe(data =>{
      console.log(data);
      this.irFuncionario();
    },
    error => console.log(error));

  }
  irFuncionario(){
    this.router.navigate(['/empregados']);
  }

  onSubmit(){
    console.log(this.empregado);  
    this.saveEmpregado();
  }

}
