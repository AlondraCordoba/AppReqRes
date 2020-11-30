import { Component, OnInit } from '@angular/core';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  data: any = [];
  error: boolean;
  mensajeError: string;

  constructor( private sRR: ServicesReqResService ) { }

  // tslint:disable-next-line: typedef
  buscar(id){
    this.sRR.search(id).subscribe((data: any) => {
      this.data = data.data;
    }, (errorServicio) => {
      this.error = true;
      // console.log(errorServicio);
      this.mensajeError = "Usuario no encontrado";
    });
  }
  ngOnInit(): void {
  }

} 
