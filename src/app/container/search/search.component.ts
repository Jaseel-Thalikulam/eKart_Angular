import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchValue: string = "Hello"
  
  updateSearchValue(event:any) {
    this.searchValue=event.target.value
  }
}
