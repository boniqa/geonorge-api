import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  constructor( private http: HttpClient) { }

  getData(): Observable<any>{
    return this.http.get('https://register.geonorge.no/api/subregister/sosi-kodelister/kartverket/kommunenummer-alle.json');
  }
}
