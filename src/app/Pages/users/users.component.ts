import { Component, OnInit } from '@angular/core';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  arrayUser: any[] = [];
  arrayUser2: any[] = [];
  User: any[] = [];

  constructor(private sRR: ServicesReqResService, private _aRouter: Router) {
  }

  // tslint:disable-next-line: max-line-length
      // data es todo el arreglo pero en el parametro data de este arreglo accederemos se encuentra la informacion de los usuarios, es por ello que para acceder a este parrametro se utiliza el punto.
      // data (todo) . data (parametro con la informacion requerida)
  ngOnInit(): void {
    this.sRR.getUserDataList().subscribe((data: any) => {
      this.arrayUser = data.data;
      console.log(data.data);
    });
  }

}
