import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient'
import { LoginComponent } from '../login/login.component'


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})



export class PatientDetailsComponent implements OnInit {
@Input()  patient:Patient;
  

  constructor() { }

  ngOnInit() {
  }

}
