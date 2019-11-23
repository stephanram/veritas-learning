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
  }

  sliderOnChangeHandler = ($event: any) => {
    this.Year = $event.value;
  }

}
