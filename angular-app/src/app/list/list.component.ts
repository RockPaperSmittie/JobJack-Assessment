import { Component, OnInit, Input } from '@angular/core';

import { listItem } from './list_item.model';

import { DataService } from '../data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})

export class ListComponent implements OnInit {
  listItems: listItem[]

  constructor(private dataService: DataService,) { 
 
  }

  //function containing fetched data from REST api
  fetch(): void {
    this.dataService.fetch()
        .subscribe(
            resultArray => this.listItems = resultArray,
            error => console.log("Error :: " + error)
            )};

  //fuction calling fetch only if post request has been made to server
  callFetch(event){
    if(event){
      setTimeout(() => {
        this.fetch();
      }, 100);
    }
  }

  @Input() changePost: string;

  ngOnInit(): void{

  }
}
