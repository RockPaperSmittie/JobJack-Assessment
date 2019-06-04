import { Component, OnInit } from '@angular/core';

import { listItem } from './list_item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listItems: listItem[]  = [
    new listItem('catimg', 'desktop/catfolder', 23, '.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
