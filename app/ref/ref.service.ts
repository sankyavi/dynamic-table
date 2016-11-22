import { Injectable } from '@angular/core';
import  { Http , Response } from '@angular/http';

/**
 * 
 * 
 * @export
 * @class RefService
 */
@Injectable()
export class RefService{
    constructor(private http: Http){}

    getData(id : number) {
        let url = './app/ref/' + id + '.json';
        console.log("url in service call: " + url);
        return this.http.get(url).map((res:Response) => res.json());
    }
}
