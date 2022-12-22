import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 // constructor(public navCtrl: NavController) {}
  constructor(private router: Router){}

  godoctorlogin(){
    this.router.navigateByUrl('/doctor-login');
  }
  gopatientlogin(){
    this.router.navigateByUrl('/patient-login');
  }
}
