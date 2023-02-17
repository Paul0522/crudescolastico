import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AsignaturaModel } from '../model/asignatura-model';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  constructor(private httpClient: HttpClient) {

  }

  getAsignatura(): Observable<AsignaturaModel[]>{
    return this.httpClient.get<AsignaturaModel[]>('http://localhost:8089/asignatura/').pipe(map(res => res));
  }

  saveAsignatura(request: any): Observable<any>{
    return this.httpClient.post<any>('http://localhost:8089/asignatura/', request).pipe(map(res => res));
  }

  updateAsignatura(request: any): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8089/asignatura/',request).pipe(map(res => res));
  }

  deleteAsignatura(id: number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8089/asignatura/'+id).pipe(map(res => res));
  }

}
