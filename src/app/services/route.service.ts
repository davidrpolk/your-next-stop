import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpParams } from "@angular/common/http";
import { CustomHttpParamEncoder } from '../custom-http-param-encoder';

@Injectable({
  providedIn: 'root'
})
export class RouteService {
  private getRoutePositionsEndpoint = `${environment.BASE_API_URL}/getRoutePositions`;

  constructor(private http: HttpClient) { }

  getRoutePositions(route) {
  
    return this.http.get(this.getRoutePositionsEndpoint, {
      params: new HttpParams({ encoder: new CustomHttpParamEncoder() })
                  .set('origin', route.origin)
                  .set('destination', route.destination)
    })
  }
  
}