import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent {
    title = "reference Table managmanent App";

    constructor(private router: Router) { }

    onClick() {
    this.router.navigate(['reference-details', "CoverageMaster"]);
    }

    onClick2() {
        this.router.navigate(['reference-details', "KungFuMaster"]);
    }

    onClick3() {
        this.router.navigate(['reference-details', "DinoMaster"]);
    }
    onClick4() {
        this.router.navigate(['placeholder-details']);
    }
}
