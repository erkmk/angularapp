import { RouterModule, Routes } from '@angular/router';
import { ContactListComponent } from './components/contactlist.component';
import { LoginComponent } from './components/login.component';
import { ShowComponent } from './components/show.component';
import { AlwaysAuthGuard } from './services/alwaysauthguard';
import { CheckRoleGuard } from './services/check.guard';

export const customRoutes: Routes = [
    {path:'', component:LoginComponent},
    {path:'contacts', component:ContactListComponent,
        canActivate:[AlwaysAuthGuard]
    },
    {path:'show/:selected', component:ShowComponent},
    {path:'about',canLoad:[CheckRoleGuard],
        loadChildren: ()=>
        import('./about/about.module').then(m=>m.AboutModule)},//this bundled separately

    {path:'**', component:LoginComponent} //no routes are matching, sequence is matter
];

export const SPARouting=RouterModule.forRoot(customRoutes)
