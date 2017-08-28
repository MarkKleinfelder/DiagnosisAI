import { Injectable } from '@angular/core';
import { PATIENT } from './mock-patient';
import { Patient } from './patient';



@Injectable()
export class PatientService{
	getPatient(): Promise<Patient[]> {
		return Promise.resolve(PATIENT);
	}
}