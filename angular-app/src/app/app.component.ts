import { Component, Output, ViewChild } from '@angular/core';
import {ListComponent} from './list/list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'dir-list-app';

//receives post request state for sharing with child component
@ViewChild(ListComponent) private list: ListComponent;

onChangePost($event){
  this.list.callFetch(event);
  }

};

