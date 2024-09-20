// src/app/ip-address.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This makes the service available application-wide
})
export class IpAddressService {
  private ipApiUrl = 'http://65.2.81.145:32553'; // URL to web API

  constructor(private http: HttpClient) { }

  getIpAddress(): Observable<any> {
    return this.http.get(this.ipApiUrl);
  }
}
