import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Observable} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {listItem} from "./list/list_item.model";

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }
  
  //service for sharing data received from rest api
  fetch(): Observable<listItem[]>{
      return this.http.get('/api').pipe(map((response) =>{
        return <listItem[]>response;
      }))
    }
  }
