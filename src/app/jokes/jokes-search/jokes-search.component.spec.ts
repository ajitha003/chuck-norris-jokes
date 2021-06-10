import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesSearchComponent } from './jokes-search.component';

describe('JokesSearchComponent', () => {
  let component: JokesSearchComponent;
  let fixture: ComponentFixture<JokesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
