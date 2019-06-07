import { Component, Output, ViewChild } from '@angular/core';
import { EventEmitter } from 'events';
import {SearchComponent} from './search/search.component'
import {ListComponent} from './list/list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [SearchComponent, ListComponent];
})
export class AppComponent {
  title = 'dir-list-app';

@ViewChild(ListComponent) private list: ListComponent;

onChangePost($event){
  this.list.callFetch(event);
}
  // changePost(data){
  //  return data
  // };

};

