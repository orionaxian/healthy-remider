import { DatabaseService, Pat } from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pres-detail',
  templateUrl: './pres-detail.page.html',
  styleUrls: ['./pres-detail.page.scss'],
})
export class PresDetailPage implements OnInit {
  prescription = null;
  constructor(private route: ActivatedRoute, private db: DatabaseService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let presid = params.get('id');

      this.db.getPrescription(presid).then(data => {
        this.prescription= data;
       // this.patient_id = this.patient.patient_id.join(',');
      });
      
    });
  }
 /*
  delete() {
    this.db.deletePatient(this.patient.id).then(() => {
      this.router.navigateByUrl('/patients');
    });
  }
 
  updatePatient() {
    
    let patient_id = this.patient_id.split(',');
    patient_id = patient_id.map(pat_id => pat_id.trim());
    this.patient.patient_id = patient_id;
 
    this.db.updatePatient(this.patient).then(async (res) => {
      let toast = await this.toast.create({
        message: 'Patient updated',
        duration: 3000
      });
      toast.present();
    });
  }
  */
}
