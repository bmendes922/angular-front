import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpregadoListComponent } from './empregado-list/empregado-list.component';
import { CreateEmpregadoComponent } from './create-empregado/create-empregado.component';
import { FormsModule } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { UpdateEmpregadoComponent } from './update-empregado/update-empregado.component';
import { EmpregadoDetailsComponent } from './empregado-details/empregado-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpregadoListComponent,
    CreateEmpregadoComponent,
    UpdateEmpregadoComponent,
    EmpregadoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
