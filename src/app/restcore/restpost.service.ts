import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostModel1 } from './../restpost/restpost.model1';
import { Observable } from "rxjs";

@Injectable()
export class PostDataAPIService {

    //HTTP POST calls
    private readonly POST_REST_API_VALID: string = "https://reqres.in/api/users";

    constructor(private httpClient: HttpClient) {

    }

    /**
     * Post data without any header
     */
    public postModelData1(): Observable<any> {
        let model1: PostModel1 = new PostModel1();
        model1.$name = "morpheus";
        model1.$job = "leader";
        return this.httpClient.post(this.POST_REST_API_VALID, model1);
    }

    /**
     * Post data with header
     */
    public postModelDataWithHeader(): Observable<any> {
        let model1: PostModel1 = new PostModel1();
        model1.$name = "morpheus";
        model1.$job = "leader";
        let headers = new HttpHeaders();
        headers = headers
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')

        return this.httpClient.post(this.POST_REST_API_VALID, model1, { headers: headers });
    }

    public postInputDataWithModel(model1: PostModel1): Observable<any> {
        return this.httpClient.post(this.POST_REST_API_VALID, model1);
    }


}