import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
//import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.page.html',
  styleUrls: ['./doctor.page.scss'],
})
export class DoctorPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gohome(){
    this.router.navigateByUrl("/home");
  }
  gopatients(){
    this.router.navigateByUrl('/patients');
  }

}
