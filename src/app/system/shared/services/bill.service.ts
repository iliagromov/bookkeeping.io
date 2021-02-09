import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../models/bill.model';
import { map } from 'rxjs/operators';
import { BaseApi } from '../../../shared/core/base-api';

@Injectable()
export class BillService extends BaseApi {
    
    constructor(
        public http:HttpClient
        ) {
            super(http)
        }
    // getBill(): Observable<any> {
    //     return this.http.get('http://localhost:3000/bill')
        
    // }
    getBill(): Observable<any> {
       return this.get('bill')
        
    }
    // getCurrency(): Observable<any> {
    //     return this.http.get(API_URL_LATEST);
    // }
    updateBill(bill: Bill):Observable<Bill> {
        return this.put('bill', bill)
    }

    getCurrency(): Observable<any> {
        return this.getApiLatest();
    }
    
}