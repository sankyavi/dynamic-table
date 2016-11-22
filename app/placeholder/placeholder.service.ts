import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';

import 'rxjs/Rx';

/**
 * @implements calls the service and return a Http response object 
 * @author Avinash 
 * @export
 * @class PlaceholderService
 */
@Injectable()
export class PlaceholderService{
    constructor(private http: Http){}

    getData(method : string) {
        return this.http.get('https://jsonplaceholder.typicode.com/'+method).map((res:Response) => res);
    }
}
