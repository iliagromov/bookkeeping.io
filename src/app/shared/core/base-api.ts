import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const API = 'http://data.fixer.io/api';
const ENDPOINT_URL_LATEST = '/latest?';
const API_KEY = 'access_key=34bbd7aa4b2fdeccf39d4fec400a09c9&format=1';
const API_URL_LATEST = API+ENDPOINT_URL_LATEST+API_KEY;

@Injectable()
export class BaseApi{
    // private baseUrl = 'https://bookkeeping-42039.firebaseio.com/';
    private baseUrl = 'http://localhost:3000/';
    private apiUrlLatest = API_URL_LATEST;
    constructor(
        public http:HttpClient
    ){}

    private getUrl(url: string = ''): string {
        return this.baseUrl + url
    }

    private getUrlApi(){
        return this.apiUrlLatest;
    }

    public get(url: string = ''): Observable<any> {
        return this.http.get(this.getUrl(url))
    }

    public getApiLatest(){
        return this.http.get(this.getUrlApi())
    }

    public post(url: string = '', data: any = {}): Observable<any> {
        return this.http.post(this.getUrl(url), data)
    }

    public put(url: string = '', data: any = {}): Observable<any> {
        return this.http.put(this.getUrl(url), data)
    }

    
}