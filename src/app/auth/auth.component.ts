import { NgModule, Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { fadeStateTrigger } from '../shared/animation/fade.animation';
@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.less'],
    animations: [fadeStateTrigger]

})

export class AuthComponent implements OnInit {
    
    @HostBinding('@fade') a = true;

    constructor(private router: Router) { }
    ngOnInit(): void {
        this.router.navigate(['/login']);
    }

}