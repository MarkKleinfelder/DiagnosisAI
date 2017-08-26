import { Component, OnInit, Input } from '@angular/core';
import { Patient } from '../patient'
import { PatientService } from '../patient.service'


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
