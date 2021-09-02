import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './models/User.model';
import { Software } from './models/Software.model';

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

  public ChercherCompte(email: string,mdp: string):Observable<User>{
    return this.http.get<User>('http://localhost:8080/comptes/chercher?email='+email+'&MDP='+mdp);
  }

  public VerifieCompte(email: string,mdp: string):Observable<Number>{
    return this.http.get<Number>('http://localhost:8080/comptes/verifier?email='+email+'&MDP='+mdp);
  }

  public getSoftwares(): Observable<Software[]> {
    return this.http.get<Software[]>('http://localhost:8080/Softwares/liste');
  }

  public addSoftware(software: Software): Observable<Software> {
    return this.http.post<Software>('http://localhost:8080/Softwares/ajouter', software);
  }

  
  public updateSoftware(software: Software): Observable<Software> {
    return this.http.put<Software>('http://localhost:8080/Softwares/modifier', software);
  }
  

  public deleteSoftware(softwareId: number): Observable<void> {
    return this.http.delete<void>('http://localhost:8080/Softwares/supprimer/'+softwareId);
  }


}
