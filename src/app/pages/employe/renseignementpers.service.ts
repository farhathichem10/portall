import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenseignementpersService {

  constructor(private http: HttpClient) {
  }
  getRENSEIGNEMENTPERSbycodesocandmatpers(x:any,y:any){
    return this.http.get("http://127.0.0.1:8080/RENSEIGNEMENT_PERS/getbycodesocandmatpers/"+x+"/"+y)
  }
  getdebcycle(x:any,y:any){
    return this.http.get("http://127.0.0.1:8080/RENSEIGNEMENT_PERS/get1/"+x+"/"+y)

  }
  getfin(x:any,y:any){
    return this.http.get("http://127.0.0.1:8080/RENSEIGNEMENT_PERS/get2/"+x+"/"+y)

  }
  get3(x:any,y:any){
    return this.http.get("http://127.0.0.1:8080/RENSEIGNEMENT_PERS/get3/"+x+"/"+y)

  }
  get4(x:any,y:any){
    return this.http.get("http://127.0.0.1:8080/RENSEIGNEMENT_PERS/get4/"+x+"/"+y)


  }
}
