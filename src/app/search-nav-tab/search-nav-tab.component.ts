import { Component, OnInit } from '@angular/core';
import { faCoffee, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-nav-tab',
  templateUrl: './search-nav-tab.component.html',
  styleUrls: ['./search-nav-tab.component.css']
})
export class SearchNavTabComponent implements OnInit {
  faCoffee = faCoffee;
  faObjectGroup = faObjectGroup;
  
  constructor() {
   }

  ngOnInit() {
  }

}
