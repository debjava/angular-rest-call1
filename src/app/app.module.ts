import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from "./app.component";
import { RestGET } from './restGet/restget.component';
import { RESTAPIService } from './restcore/restservice.component';
import { RESTPostComponent } from './restpost/restpost.component';
import { PostDataAPIService } from './restcore/restpost.service';
import { RestPutComponent } from './restPut/restput.component';
import { RESTPutAPIService } from './restcore/restput.service';
import { RESTDeleteAPIService } from './restcore/restdelete.service';
import { RestDeleteComponent } from './restDelete/restdelete.component';

@NgModule({
    declarations: [AppComponent, RestGET, RESTPostComponent, RestPutComponent, RestDeleteComponent],

    imports: [BrowserModule, FormsModule, HttpClientModule],

    providers: [RESTAPIService,PostDataAPIService,RESTPutAPIService,RESTDeleteAPIService],

    bootstrap: [AppComponent]
})
export class AppModule {

}