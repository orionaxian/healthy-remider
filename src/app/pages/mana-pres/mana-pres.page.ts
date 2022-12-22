import { DatabaseService, Pat} from './../../services/database.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mana-pres',
  templateUrl: './mana-pres.page.html',
  styleUrls: ['./mana-pres.page.scss'],
})
export class ManaPresPage implements OnInit {

  prescriptions: Observable<any[]>;
  patient = {};
  
  constructor(private db: DatabaseService,private router: Router) { }
  ngOnInit() {
  this.db.getDatabaseState().subscribe(rdy => {
    
      this.prescriptions = this.db.getPres();
    });
  }
  createschedule(){
    this.router.navigateByUrl('/schedule');
  }
  presdetail(){
    this.router.navigateByUrl('/prescription');
  }
}
