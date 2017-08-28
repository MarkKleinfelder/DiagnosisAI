import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
 
})
export class LoginComponent implements OnInit {

  patients:Patient[];
  selectedPatient:Patient;

  constructor(private patientService : PatientService) { }


  getPatients(): void {
  this.patientService.getPatient().then(patients => this.patients = patients) 
  } 

  ngOnInit():void {
  	this.getPatients();
  }

  onSelect(patient:Patient):void{
  	this.selectedPatient = patient;
  }

}
