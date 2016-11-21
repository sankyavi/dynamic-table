import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class PlaceholderService{
    constructor(private http: Http){}

    getData(method : string) {
        return this.http.get('https://jsonplaceholder.typicode.com/'+method).map((res:Response) => res);
    }
}
