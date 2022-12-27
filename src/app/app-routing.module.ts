import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from './guards/login-guard.guard';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    { path: '', component: LandingPageComponent,
      children: [
        { path: '', component: SignInComponent},
        { path: 'register', component: SignUpComponent }
      ]
    },
    {
      path: 'dashboard', component: DashboardComponent,
      canActivate: [LoginGuardGuard]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
