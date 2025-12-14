import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home';
import { BusinessComponent } from './Pages/business/business';
import { ContactComponent } from './Pages/contact/contact';
import { CloudServicesComponent } from './Pages/cloud-services/cloud-services';
import { CyberSecurityComponent } from './Pages/cyber-security/cyber-security';
import { DataEngineeringComponent } from './Pages/data-engineering/data-engineering';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cloud-services', component: CloudServicesComponent },
  { path: 'cyber-security', component: CyberSecurityComponent },
  { path: 'data-engineering', component: DataEngineeringComponent },
];