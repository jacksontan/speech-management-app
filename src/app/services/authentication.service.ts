import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    public token: string;
    private testAccount = {
        username: 'test',
        password: 'test'
    };

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): boolean {
        if(username === this.testAccount.username && password === this.testAccount.password) {
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: 'fake-jwt-token' }));
            return true;
        }
        else {
            return false;
        }
    }

    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}