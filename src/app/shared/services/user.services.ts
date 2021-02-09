import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import{ map } from 'rxjs/operators'
import { User } from '../models/user.model';
import { BaseApi } from '../core/base-api';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
    providedIn: 'root'
    })
export class UsersService extends BaseApi{
    
    constructor(
        public http:HttpClient
        ){
            super(http);
        }

    // getUserByEmail(email: string) {
    //     return this.http.get(`http://localhost:3000/users?email=${email}`)
    //         .pipe(
    //             map((user: User[]) =>[0] ? user[0] : undefined)
    //         )
    // }
    getUserByEmail(email: string) {
        return this.get(`users?email=${email}`)
            .pipe(
                map((users: User[]) =>users[0] ? users[0] : undefined)
            )
    }

    // createNewUser(user:User) {
    //     return this.http.post('http://localhost:3000/users', user)
    
      
    // }

    createNewUser(user:User) {
        return this.post('users', user)
    
      
    }
}
