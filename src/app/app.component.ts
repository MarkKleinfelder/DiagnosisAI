import { Component, OnInit } from '@angular/core';
import 'materialize-css';
import 'angular2-materialize';
import { MaterializeModule, MaterializeDirective } from "angular2-materialize";
import * as $ from 'jquery';
import {AfterViewInit} from '@angular/core';    
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import 'materialize-css';
import 'angular2-materialize'

import { AppModule } from '../app/app.module';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

   ngOnInit():void {
      // $(".button-collapse").sideNav(); 
       }

}


   