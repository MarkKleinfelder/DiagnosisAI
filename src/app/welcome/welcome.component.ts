import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {MaterializeAction} from 'angular2-materialize';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	(<any>$(".dropdown-button")).dropdown()
  }

}
