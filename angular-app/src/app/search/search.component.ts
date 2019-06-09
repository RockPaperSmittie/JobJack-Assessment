import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from '../data.service';

// import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [DataService]
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService, private http: HttpClient) {

  }
  

  @Output() postChange = new EventEmitter;
  

  updatePostState(){
    if(this.onSearch !== null){
      this.postChange.emit('POSTED')
    }
  }

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
  
}


