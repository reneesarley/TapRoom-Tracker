import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateKegComponent } from './update-keg.component';

describe('UpdateKegComponent', () => {
  let component: UpdateKegComponent;
  let fixture: ComponentFixture<UpdateKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
