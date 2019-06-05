import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  // onSearch(directory: { search: string}) {
  //   this.http.post('http//localhost:2200/api', directory).subscribe(responseData => {
  //     console.log(responseData);
  //   });
  // }
  onSearch(){
    this.http.get('/api').subscribe(data =>{
      console.log(data);
    });
  }

}
