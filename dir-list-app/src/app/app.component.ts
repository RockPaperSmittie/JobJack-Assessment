import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir-list-app';

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onSearch(directory: { search: string}) {
    this.http.post('http//localhost:2200/', directory).subscribe(responseData => {
      console.log(responseData);
    })
  }
}
