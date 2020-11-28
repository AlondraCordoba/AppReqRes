import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() PadreUser: any = [];
  @Output() selectorUser: EventEmitter<number>;


  constructor(private _aRouter: Router) { }

  ngOnInit(): void {
  }

}
