import { Observable, observable } from 'rxjs';
import { Empregado } from './empregado';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {
  static deletarEmpregado(id: number) {
    throw new Error('Method not implemented.');
  }
  static getEmpregadoList() {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:8081/api/v1/empregados";
  
  constructor(private httpClient: HttpClient) { }

    getEmpregadosList(): Observable<Empregado[]>{

      return this.httpClient.get<Empregado[]>(`${this.baseURL}`); 
    
  }
  createEmpregado(empregado: Empregado): Observable<any>{

    return this.httpClient.post(`${this.baseURL}` , empregado);
  }

  getEmpregadoById(id: number): Observable<Empregado>{

    return this.httpClient.get<Empregado>(`${this.baseURL}/${id}`);
  }

  atualizaEmpregado(id: number, empregado: Empregado): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,empregado);
  }
  deletarEmpregado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
