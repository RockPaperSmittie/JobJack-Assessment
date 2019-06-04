import { Component, OnInit } from '@angular/core';

import { listItem } from './list_item.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listItems: listItem[]  = [
    new listItem('catimage', 'desktop/catfolder/cats/whitecats/bignfluffy/rescue/3legs/piano', 29, '.jpeg'),
    new listItem('Dogpic', 'desktop/catfolder/dogs', 31, '.jpeg'),
    new listItem('Pugpic', 'desktop/catfolder/Pugs', 234, '.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
