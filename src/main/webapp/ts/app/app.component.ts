import { Component } from '@angular/core';

@Component({
    selector: 'sg-my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
        <a [routerLink]="['/books']" routerLinkActive="active">Books</a>
    </nav>
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title: string = "Welcome To Library"
}