import { Component, OnInit } from '@angular/core';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {
  data: any[] = [];

  constructor(private sRR: ServicesReqResService) {
    this.sRR.getUserDataList().subscribe((data: any) => {
      // tslint:disable-next-line: max-line-length
      // data es todo el arreglo pero en el parametro data de este arreglo accederemos se encuentra la informacion de los usuarios, es por ello que para acceder a este parrametro se utiliza el punto.
      // data (todo) . data (parametro con la informacion requerida)
      console.log(data.data);
    });
  }

  ngOnInit(): void {
  }
}
