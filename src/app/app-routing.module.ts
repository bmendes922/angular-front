import { EmpregadoDetailsComponent } from './empregado-details/empregado-details.component';
import { CreateEmpregadoComponent } from './create-empregado/create-empregado.component';
import { EmpregadoListComponent } from './empregado-list/empregado-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmpregadoComponent } from './update-empregado/update-empregado.component';

const routes: Routes = [

  {path:'empregados', component: EmpregadoListComponent},
  {path:'create-empregado', component: CreateEmpregadoComponent},
  {path: '', redirectTo: 'empregados', pathMatch: 'full'},
  {path: 'atualizar-funcionario/:id', component: UpdateEmpregadoComponent},
  {path: 'funcionario-detalhes/:id', component:EmpregadoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
