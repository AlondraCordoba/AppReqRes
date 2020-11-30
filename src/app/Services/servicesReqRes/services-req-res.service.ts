import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesReqResService {

  constructor(private http: HttpClient) {  }
  

  // Get para acceder a la lista de usuarios de la pagina uno
  // GET LIST USER
  // tslint:disable-next-line: typedef
  public getUserDataList(){
    return this.http.get('https://reqres.in/api/users?page=1');
  }

  // Get para busqueda (GET SINGLE USER)
  // tslint:disable-next-line: typedef
  public search(id){
    if (id === id){
      return this.http.get(`https://reqres.in/api/users/${id}`).pipe(map(data => {
        // console.log(data);
        return data;
      }));
    }
}

// tslint:disable-next-line: typedef
public createUser(form){
  return this.http.post('https://reqres.in/api/users/', form).pipe(map(value => value));
  //return form.push(value); 
}

// tslint:disable-next-line: typedef
setToken(token): void {
  localStorage.setItem("accessToken", token);
}

// tslint:disable-next-line: typedef
getToken() {
  return localStorage.getItem("accessToken");
}
// tslint:disable-next-line: typedef
setUser(form){
  let user_string = JSON.stringify(form);
  localStorage.setItem("value", user_string);
}

public deleteUser(id : number){
  return this.http.delete(`https://reqres.in/api/users/${id}`);
}

}
