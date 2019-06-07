import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { listItem } from '../list/list_item.model';
import { ACTIVE_INDEX } from '@angular/core/src/render3/interfaces/container';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // listItem;
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSearch(inputDir: { search: string}) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:2200/dir', inputDir, {responseType: 'text'}).subscribe(responseData => {
      console.log(responseData);
      console.log('Whooo!')
    });
  }
  onPost(){
    setTimeout(() => {
      return this.http.get('/api').subscribe(data=>{
        for(let i in data){
          console.log(data[i].name)
        }
      });
    }, 500);
  
  }

}
