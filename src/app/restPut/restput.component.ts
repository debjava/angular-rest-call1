import { Component } from "@angular/core";
import { RestPutModel } from './restput.model';
import { RESTPutAPIService } from "../restcore/restput.service";

@Component({
    selector: 'rest-put',
    templateUrl: './restput.component.html'
})
export class RestPutComponent {

    private nameText: string;
    private jobText: string;

    public jsonDataToDisplay: any;

    constructor(private putApiService: RESTPutAPIService) { }

    public onClickUpdateInfo(): void {
        console.log("You clicked update button ...");
        let putModel: RestPutModel = new RestPutModel();
        putModel.$name = this.nameText;
        putModel.$job = this.jobText;
        let putResponse = this.putApiService.updateUserInfo(putModel);
        putResponse.subscribe(dataResponse => {
            console.log("Put Data Response : ", dataResponse);
            this.jsonDataToDisplay = dataResponse;
        },
            error => {
                console.log("Error ---->", error);
            })
    }
}