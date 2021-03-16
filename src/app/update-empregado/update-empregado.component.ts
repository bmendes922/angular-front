import { Route } from '@angular/compiler/src/core';
import { EmpregadoService } from './../empregado.service';
import { Empregado } from './../empregado';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-empregado',
  templateUrl: './update-empregado.component.html',
  styleUrls: ['./update-empregado.component.css']
})
export class UpdateEmpregadoComponent implements OnInit {

  id: number;
  empregado: Empregado = new Empregado();
  constructor(private empregadoService: EmpregadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.empregadoService.getEmpregadoById(this.id).subscribe(data => {
      this.empregado = data;

    }, 
    error => console.log(error));
  }
  onSumit(){
    this.empregadoService.atualizaEmpregado(this.id, this.empregado).subscribe( data =>{
      this.irFuncionario();
    },
    error => console.log(error));
  }

  irFuncionario(){
    this.router.navigate(['/empregados']);
  }

}
