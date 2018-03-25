import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {HttpParams} from "@angular/common/http";
import { MappingService } from '../mapping.service';

@Component({
  selector: 'preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
  public closeBranches: any;
  public bestBranch: any;
  public title: any;
  constructor(private http: HttpClient, private mappingservice: MappingService) { }

  ngOnInit() {
    this.closeBranches = this.mappingservice.nearBranches();
    this.bestBranch = this.mappingservice.bestB()
    this.title = this.mappingservice.displayUserAddress();
  }

}
