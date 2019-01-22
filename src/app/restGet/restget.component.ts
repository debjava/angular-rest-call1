import { Component } from "@angular/core";
import { RESTAPIService } from "../restcore/restservice.component";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";
import { map } from 'rxjs/internal/operators';

@Component({
    selector: 'rest-get',
    templateUrl: './restget.component.html'
})

export class RestGET {

    public responseGetJsonData: any;

    constructor(private restApiService: RESTAPIService) {

    }

    /**
     * This method provides the info about the headers
     */
    public onClickCheckAll(): void {
        this.responseGetJsonData = null;
        let responseData: Observable<HttpResponse<Object>> = this.restApiService.getOrder();

        responseData.subscribe(responseData => {
            console.log("All response data : ", responseData);
            console.log("Response Headers :::", responseData.headers)
            console.log("Response status : ", responseData.status);
            console.log("responseData.url --->", responseData.url);
            console.log("responseData.body --->", responseData.body);
            this.responseGetJsonData = responseData.body;
        }, error => {
            console.log("Incoming Error : ", error);
        });
    }

    /**
     * The below method is also correct way to implement
     */
    public onClickCheckOrder(): void {
        this.responseGetJsonData = null;
        let responseData: Observable<any> = this.restApiService.getOrder();
        responseData.subscribe(data => {
            console.log("Response Status : ", data.status);
            console.log("Response text : ", data.statusText);
            console.log("Now Observable response body : ", data.body);
            this.responseGetJsonData = data.body;
        },
            error => {
                console.log("Fatal Error while retrieving the data...")
            });
    }

    public onRestGetButtonClick(): void {
        let responseData: Observable<any> = this.restApiService.getDataFromRESTAPIWithHeaders();
        responseData.subscribe(data => {
            console.log("Observable data : ", data);
            console.log("Status Code : ", data.status);
            this.responseGetJsonData = data;
        },
            error => {
                console.log("Fatal Error while retrieving the data...")
            });

    }

    public onInvalidGetButtonClick(): void {
        let responseData: Observable<any> = this.restApiService.makeInvalidGetRESTAPI();
        responseData.subscribe(data => {
            console.log("Observable data : ", data);
            this.responseGetJsonData = data;
        },
            error => {
                console.log("Fatal Error while retrieving the data...")
            });
    }

    public onWrongGetButtonClick() {
        this.responseGetJsonData = null;
        let responseData: Observable<any> = this.restApiService.makeWrongGetRESTAPI();
        responseData.subscribe(data => {
            console.log("Observable data : ", data);
            this.responseGetJsonData = data;
        },
            error => {
                console.log("Fatal Error while retrieving the data...")
            });
    }

}