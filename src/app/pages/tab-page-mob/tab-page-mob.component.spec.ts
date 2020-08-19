import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {TabPageMobComponent} from './tab-page-mob.component';

describe('TabPageMobComponent', () => {
  let component: TabPageMobComponent;
  let fixture: ComponentFixture<TabPageMobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabPageMobComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabPageMobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
