import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PlaceholderService } from './placeholder.service';

/**
 * @author Avinash 
 * @implements calls placeholder json service to fetch data 
 * @export
 * @class PlaceholderComponent
 */
@Component({ templateUrl: './app/placeholder/placeholder.component.html' })


export class PlaceholderComponent {

    posts: string[];
    headers: string[];
    loading : boolean = false;

    constructor(private http: Http, private _plaveholderservice: PlaceholderService) { }

    getServiceData(method: string) {
        this._plaveholderservice.getData(method).subscribe(
            data => {
                this.posts = data.json();
            },
            err => { console.log('err occured' + err) },
            () => {
                console.log('done'),
                this.headers = this.generateKeys(this.posts[0]);
                this.loading = false;
            }
        )
    }

    generateArray(obj) {
        return Object.keys(obj).map((key) => {
            return obj[key];
        });
    }

    generateKeys(obj) {
        return Object.keys(obj).map((key) => { return key });
    }

    onClick(method : string){
        this.loading = true;
        this.getServiceData(method);
    }
}
