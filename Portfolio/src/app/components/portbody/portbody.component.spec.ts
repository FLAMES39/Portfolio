import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortbodyComponent } from './portbody.component';

describe('PortbodyComponent', () => {
  let component: PortbodyComponent;
  let fixture: ComponentFixture<PortbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortbodyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
