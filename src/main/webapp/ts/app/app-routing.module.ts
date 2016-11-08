import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookRoutingModule } from "./books/book-routing.module";
import { DashboardRoutingModule } from "./dashboard/dashboard-routing.module";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes), BookRoutingModule, DashboardRoutingModule ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}