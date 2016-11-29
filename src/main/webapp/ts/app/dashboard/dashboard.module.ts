import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./components/dashboard.component";
import { NgModule } from "@angular/core";
import { DashboardRoutingModule } from "./dashboard-routing.module";

@NgModule({
    imports: [BrowserModule, DashboardRoutingModule],
    declarations: [DashboardComponent],
    exports:[DashboardComponent]
})
export class DashboardModule {
}