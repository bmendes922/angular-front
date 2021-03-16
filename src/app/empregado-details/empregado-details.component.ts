import { EmpregadoService } from './../empregado.service';
import { ActivatedRoute } from '@angular/router';
import { Empregado } from './../empregado';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empregado-details',
  templateUrl: './empregado-details.component.html',
  styleUrls: ['./empregado-details.component.css']
})
export class EmpregadoDetailsComponent implements OnInit {

  id: number
  empregado : Empregado
  constructor(private route: ActivatedRoute, private empregadoService : EmpregadoService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.empregado = new Empregado();
    this.empregadoService.getEmpregadoById(this.id).subscribe(data =>{
      this.empregado = data;
    });
  }

}
