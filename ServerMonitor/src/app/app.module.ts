import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SimJobService } from './SimJob.service';
import { Http, HttpModule } from '@angular/http';
import {PopoverModule} from "ngx-popover";

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    PopoverModule,
    FormsModule
  ],
  providers: [SimJobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
