import { tap, map, catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

@Injectable()
export class RESTAPIService {

    //HTTP GET calls
    private readonly GET_REST_API_RIGHT: string = "https://reqres.in/api/users?page=2";
    private readonly GET_REST_API_WRONG: string = "https://reqres.in/api/users?page=23";
    private readonly GET_REST_API_ERROR: string = "https://abcdInvalid.in/api/wrong?data=23";

    
    constructor(private httpClient: HttpClient) {

    }

    /**
     * Simple get call without any headers
     * Right call
     */
    getDataFromRESTAPI(): Observable<any> {
        return this.httpClient.get(this.GET_REST_API_RIGHT);
    }

    /**
     * Simple get call without any headers
     * Negative testing with blank json
     */
    makeInvalidGetRESTAPI(): Observable<any> {
        return this.httpClient.get(this.GET_REST_API_WRONG);
    }

    /**
     * Simple get call without any headers
     * Negative testing with wrong rest api call
     */
    makeWrongGetRESTAPI(): Observable<any> {
        return this.httpClient.get(this.GET_REST_API_ERROR);
    }

    /**
     * Simple get call with headers
     * Negative testing with blank json
     */
    getDataFromRESTAPIWithHeaders(): Observable<any> {
        let headers = new HttpHeaders();
        headers = headers
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .set('Hati', 'Ghoda')
        //headers = headers.set('Accept', 'application/json; charset=utf-8').set('h2','v2');
        return this.httpClient.get(this.GET_REST_API_RIGHT, { headers: headers });
    }

    createOrder1() : Observable<any> {
        console.log("createOrder1 clicked ...");
        return this.httpClient.get(this.GET_REST_API_RIGHT)
        .pipe(
          map((resp: any) => {
            console.log("Incoming response :::", resp);
            return resp;
          }), catchError( error => {
            console.log("createOrder error",error );
            alert("Create Order Service returned an error. See server log for mote details");
          return throwError("createOrder: " + error)
      
          })
        );
      }

    getOrder(): Observable<HttpResponse<Object>> {
        console.log("getOrder clicked ...");
        return this.httpClient.get<HttpResponse<Object>>(this.GET_REST_API_RIGHT, { observe: 'response' })
            .pipe(
                tap(resp => {
                    console.log("Response :::",resp);
                    // console.log('header', resp.headers.get('ReturnStatus'));
                    return resp;
                }, error => {
                    console.log("Error --->", error)
                })
            );
    }

}