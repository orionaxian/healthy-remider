import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { from } from 'rxjs';

@Component({
  selector: 'app-patientgui',
  templateUrl: './patientgui.page.html',
  styleUrls: ['./patientgui.page.scss'],
})
export class PatientguiPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gohome(){
    this.router.navigateByUrl("/home");
  }
  goPres(){
    this.router.navigateByUrl("/mana-pres");
  }

}
