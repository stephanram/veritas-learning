import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNavTabComponent } from './search-nav-tab.component';

describe('SearchNavTabComponent', () => {
  let component: SearchNavTabComponent;
  let fixture: ComponentFixture<SearchNavTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNavTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNavTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
