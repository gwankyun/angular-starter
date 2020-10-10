import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDrawerComponent } from './to-do-drawer.component';

describe('ToDoDrawerComponent', () => {
  let component: ToDoDrawerComponent;
  let fixture: ComponentFixture<ToDoDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
