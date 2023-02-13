import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerDashBoardComponent } from './dealer-dash-board.component';

describe('DealerDashBoardComponent', () => {
  let component: DealerDashBoardComponent;
  let fixture: ComponentFixture<DealerDashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealerDashBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
