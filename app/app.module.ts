import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { appRouting } from './app.routing';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RefTableComponent }  from './ref/reftable.component';
import { PlaceholderComponent} from './placeholder/placeholder.component';

import { RefService } from './ref/ref.service';
import { PlaceholderService } from './placeholder/placeholder.service';

/**
 * 
 * 
 * @export
 * @class AppModule
 */

@NgModule({
  declarations: [
    AppComponent,
    RefTableComponent,
    DashboardComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    appRouting
  ],
  providers: [
    RefService,
    PlaceholderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}