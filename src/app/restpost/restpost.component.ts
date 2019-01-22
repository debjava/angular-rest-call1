import { Component } from "@angular/core";
import { PostDataAPIService } from "../restcore/restpost.service";
import { Observable } from "rxjs";
import { PostModel1 } from "./restpost.model1";

@Component({
    selector: 'rest-post',
    templateUrl: './restpost.component.html'
})
export class RESTPostComponent {
    public pageTitle: string = "All REST Post data api calls...";

    private nameText: string;
    private jobText: string;

    public jsonDataDisplay: any;

    constructor(private postDataAPI: PostDataAPIService) { }

    public onClickValidRestPostData(): void {
        this.jsonDataDisplay = null;
        console.log("You clicked on button to post data");
        let responseData: Observable<any> = this.postDataAPI.postModelData1();

        responseData.subscribe(data => {
            console.log("Response Data :::", data);
            this.jsonDataDisplay = data;
        }, error => {
            console.log("Error while posting data :::", error);
        });
    }

    public onClickValidRestPostDataWithHeader(): void {
        this.jsonDataDisplay = null;
        console.log("You clicked on button to post data with header");
        let responseData: Observable<any> = this.postDataAPI.postModelData1();

        responseData.subscribe(data => {
            console.log("Response Data1 :::", data);
            this.jsonDataDisplay = data;
        }, error => {
            console.log("Error while posting data :::", error);
        });
    }

    public onClickPostInputData(): void {
        console.log("You invoked onClickPostInputData()");
        let model1: PostModel1 = new PostModel1();
        model1.$name = this.nameText;
        model1.$job = this.jobText;
        let postResponseData: Observable<any> = this.postDataAPI.postInputDataWithModel(model1);
        postResponseData.subscribe( responseData => {
            console.log("ResponseData from input :::",responseData);
            this.jsonDataDisplay = responseData;
        },
        error => {
            console.log("Response Error :::",error);
        });

    }
}