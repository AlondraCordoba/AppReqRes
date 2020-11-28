import { Component, OnInit } from '@angular/core';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {
  resultados: any = [];
  error: boolean;
  mensajeError: string;

  constructor( private sRR: ServicesReqResService ) { }


  ngOnInit(): void {
  }

}
