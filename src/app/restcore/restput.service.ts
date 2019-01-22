import { HttpClient } from '@angular/common/http';
import { RestPutModel } from '../restPut/restput.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class RESTPutAPIService {

    private readonly PUT_API_URI: string = "https://reqres.in/api/users/2";

    constructor(private httpClient: HttpClient) {}

    public updateUserInfo(putModel: RestPutModel): Observable<any> {
        return this.httpClient.put(this.PUT_API_URI,putModel);
        //return this.httpClient.post(this.POST_REST_API_VALID, model1);
    }

}