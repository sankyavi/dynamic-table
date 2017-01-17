import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';

// **Important **Do not import the full Rx library (~ 1MB), choose your operator which might be few kilobytes
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';

/**
 * @description calls the service and return a Http response object 
 * @author Avinash 
 * @export PlaceholderService
 * @class PlaceholderService
 */
@Injectable()
export class PlaceholderService{
    constructor(private http: Http){}

    getData(method : string) {
        return this.http.get('https://jsonplaceholder.typicode.com/'+method).map((res:Response) => res);
    }
}
