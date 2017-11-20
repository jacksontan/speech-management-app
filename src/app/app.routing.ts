import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ViewSpeechComponent } from './view/view.component';
import { AuthGuard } from './_guards/auth.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: '', component: ViewSpeechComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);