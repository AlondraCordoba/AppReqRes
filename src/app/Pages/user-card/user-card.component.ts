import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesReqResService } from '../../Services/servicesReqRes/services-req-res.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() PadreUser: any = [];
  @Output() selectorUser: EventEmitter<number>;


  constructor(private _aRouter: Router, private sRR: ServicesReqResService) { }

  ngOnInit(): void {
  }
 
  delete(id : number){
    this.sRR.deleteUser(this.PadreUser.id).subscribe(
      response =>  {
        this.PadreUser = this.PadreUser.filter(value => value.id !== id);
    });
  }

}
