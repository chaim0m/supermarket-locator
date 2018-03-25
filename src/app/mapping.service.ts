import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MappingService {
  userLocation: object;
  bestBranches: any[];
  bestStore: string;
  constructor(private http: HttpClient) { }

  storeLocation(location){
    this.userLocation=location;
    console.log(this.userLocation);
  }
  nearBranches(){
    return 1
    // this.http.get //get from server best branches
  }
  bestB(){
    return 2
    // this.http.get //get from server best store based on total distance and closest one.
  }
  displayUserAddress(){
    if (this.userLocation){
    return this.userLocation;
    }
  }
}
