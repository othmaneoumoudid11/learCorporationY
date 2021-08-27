import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8080/comptes/listeCC');
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:8080/comptes/ajouterCU', user);
  }

  
  public updateUser(user: User): Observable<User> {
    return this.http.put<User>('http://localhost:8080/comptes/modifierCC', user);
  }
  

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/comptes/supprimer/'+userId);
  }


}