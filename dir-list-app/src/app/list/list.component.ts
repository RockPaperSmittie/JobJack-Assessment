import { Component, OnInit, Input } from '@angular/core';

import { listItem } from './list_item.model';

import { DataService } from '../data.service';

// import { DeviceDetectorService } from 'ngx-device-detector';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DataService]
})
export class ListComponent implements OnInit {
  listItems: listItem[]

  constructor(private dataService: DataService,) { 
    // this.osType();
  }

  // osType(){
  //   const isDesktopDevice = this.deviceService.isDesktop();
  //   console.log(isDesktopDevice);
  // }

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
    }, 100);

  }
}

  @Input() changePost: string;

  ngOnInit(): void{

  }
}
