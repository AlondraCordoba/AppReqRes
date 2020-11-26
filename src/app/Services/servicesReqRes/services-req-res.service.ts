import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicesReqResService {

  constructor(private http: HttpClient) {  }

  // Get para acceder a la lista de usuarios de la pagina uno
  // tslint:disable-next-line: typedef
  public getUserDataList(){
    return this.http.get('https://reqres.in/api/users?page=1');
  }
}
