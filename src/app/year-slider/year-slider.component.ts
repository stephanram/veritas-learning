import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-slider',
  templateUrl: './year-slider.component.html',
  styleUrls: ['./year-slider.component.css']
})
export class YearSliderComponent implements OnInit {
  public Year: string;

  constructor() { }

  ngOnInit() {
    this.Year = (new Date()).getFullYear().toString();
  }

  sliderOnChangeHandler = ($event: any) => {
    console.log($event.target.value);
    this.Year = $event.target.value;
  }

}
