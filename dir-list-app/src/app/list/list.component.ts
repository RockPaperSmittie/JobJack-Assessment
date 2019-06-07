import { Component, OnInit, Input } from '@angular/core';

import { listItem } from './list_item.model';

import { DataService } from '../data.service';
import { post } from 'selenium-webdriver/http';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})
export class ListComponent implements OnInit {
  listItems: listItem[]

  constructor(private dataService: DataService) { }

  fetch(): void {
    this.dataService.fetch()
        .subscribe(
            resultArray => this.listItems = resultArray,
            error => console.log("Error :: " + error)
        )


};
callFetch(event){
  if(event){
    setTimeout(() => {
      this.fetch();
    }, 500);

  }
}

  @Input() changePost: string;



  // post(data){
  //   if(data){
  //     this.fetch()
  //   }
  // };
  ngOnInit(): void{

  }
}
