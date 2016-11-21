import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { RefService } from './ref.service';

@Component({ templateUrl: './app/ref/reftable.component.html' })

export class RefTableComponent {

  private sub: any;
  private id: any;
  private master_name: String;
  private schema: string[];
  private schemaval: string[];
  private references: string[];
  private noofrecords: number;

  private firstpage: boolean = true;
  private lastpage: boolean = false;

  constructor(private route: ActivatedRoute, private http: Http, private _refService: RefService) { }

  private ngOnInit() {
    this.sub = this.route.params
      .map(params => params['id'])
      .switchMap(id => this._refService.getData(id))
      .retry(2)
      .subscribe(
      data => {
        this.master_name = data.name;
        this.schema = data.schema;
        this.references = data.references;
        this.noofrecords = data.totalNumberOfRecords;
      },
      err => { console.log('err occured' + err) },
      () => console.log('done')
      )
  }

  private ngOnDestroy() {
    this.sub.unsubscribe();
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      //console.log(key + ' -> ' + obj[key]); 
      return obj[key];
    });
  }

  generateKeys(obj) {
    return Object.keys(obj).map((key) => { return key });
  }

  showid(num: number) {
    var keys: string[] = this.generateKeys(this.references[num]);
    var values: string[] = this.generateArray(this.references[num]);
    alert("This will open edit Modal for " + keys[0] + ":" + values[0]);
  }
}