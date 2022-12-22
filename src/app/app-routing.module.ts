import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'patients', loadChildren: './pages/patients/patients.module#PatientsPageModule' },
  { path: 'patients/:id', loadChildren: './pages/patient-detail/patient-detail.module#PatientDetailPageModule' },
  { path: 'doctor', loadChildren: './pages/doctor/doctor.module#DoctorPageModule' },
  { path: 'doctor-login', loadChildren: './pages/doctor-login/doctor-login.module#DoctorLoginPageModule' },
  { path: 'patient-login', loadChildren: './pages/patient-login/patient-login.module#PatientLoginPageModule' },
 // { path: 'prescription', loadChildren: './pages/prescription/prescription.module#PrescriptionPageModule' },
  { path: 'patientgui', loadChildren: './pages/patientgui/patientgui.module#PatientguiPageModule' },
  { path: 'mana-pres', loadChildren: './pages/mana-pres/mana-pres.module#ManaPresPageModule' },
  { path: 'schedule', loadChildren: './pages/schedule/schedule.module#SchedulePageModule' },
  { path: 'prescription/:presid', loadChildren: './pages/pres-detail/pres-detail.module#PresDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
