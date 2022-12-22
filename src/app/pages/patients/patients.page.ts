import { DatabaseService, Pat} from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {

  patients: Pat[] = [];
  prescriptions: Observable<any[]>;
  patient = {};
  prescription ={};
  selectedView = 'pats';
 
  constructor(private db: DatabaseService) { }
 
  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getPats().subscribe(pats => {
          this.patients = pats;
        })
        this.prescriptions = this.db.getPres();
      }
    });
  }
 
  addPatient() {
    let patient_id = this.patient['patient_id'].split(',');
    patient_id = patient_id.map(pat_id => pat_id.trim());
 
    this.db.addPatient(this.patient['patient_name'], patient_id, this.patient['patient_img'])
    .then(_ => {
      this.patient = {};
    });
  }

  addPrescription() {
    this.db.addPrescription(this.prescription['pre_name'], this.prescription['patientName'])
    .then(_ => {
      this.prescription = {};
    });
  }
}
