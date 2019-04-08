import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pruthvi-firm-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.scss']
})
export class HeaderComponent {

    userName: any = localStorage.getItem('userName')
    
    constructor(private router: Router){

    }

    logout(){
        localStorage.clear();
        this.router.navigate(['login'])
    }
}