import { Component } from "@angular/core";
import { RESTDeleteAPIService } from "../restcore/restdelete.service";
import { Observable } from "rxjs";
import { HttpResponse } from "@angular/common/http";

@Component({
    selector: 'rest-delete',
    templateUrl: './restdelete.component.html'
})
export class RestDeleteComponent {

    public deleteResponseCode: number;

    constructor(private deleteAPIService: RESTDeleteAPIService) { }

    public onClickDeleteInfo(): void {
        let jsonDeleteResponseData: Observable<any> = this.deleteAPIService.deleteInfo();
        jsonDeleteResponseData.subscribe(responseData => {
            console.log("Delete Response Data : ", responseData);
        },
            error => {
                console.log("Error =>", error);
            });
    }

    public onClickDeleteInfoWithHeader(): void {
        console.log("You invoked onClickDeleteInfoWithHeader() ...")
        let jsonDeleteResponseData: Observable<HttpResponse<Object>> = this.deleteAPIService.deleteInfoWithHeader();
        jsonDeleteResponseData.subscribe( responseData => {
            console.log("Response Status : ", responseData.status);
            this.deleteResponseCode = responseData.status;
        },error => {
            console.log("Error --->",error);
        });
    }

    public isValid(): boolean {
        return (this.deleteResponseCode === 204)
    }


}