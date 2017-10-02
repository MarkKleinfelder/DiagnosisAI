import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'materialize-css';
import 'angular2-materialize';
import { MaterializeModule, MaterializeDirective } from "angular2-materialize";



@Component({
  selector: 'app-q-a',
  templateUrl: './q-a.component.html',
  styleUrls: ['./q-a.component.css']
})
export class QAComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	 (<any>$('ul.tabs')).tabs();
  }

}
