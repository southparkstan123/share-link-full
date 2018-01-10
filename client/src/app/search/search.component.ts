import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Output() searchKeyword = new EventEmitter();
  ngOnInit() {
  }
  onSearchKeyword(event) {
    this.searchKeyword.emit(event.target.value);
  }

}
