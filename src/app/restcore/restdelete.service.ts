import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class RESTDeleteAPIService {

    private readonly DELETE_API_URI: string = "https://reqres.in/api/users/2";
    
    constructor(private httpClient: HttpClient) {}

    public deleteInfo(): Observable<any> {
        return this.httpClient.delete(this.DELETE_API_URI);

    }

    public deleteInfoWithHeader(): Observable<HttpResponse<Object>> {
        return this.httpClient.delete<HttpResponse<Object>>(this.DELETE_API_URI,{ observe: 'response' });

    }
}