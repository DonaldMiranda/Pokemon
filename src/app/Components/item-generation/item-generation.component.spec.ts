import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGenerationComponent } from './item-generation.component';

describe('ItemGenerationComponent', () => {
  let component: ItemGenerationComponent;
  let fixture: ComponentFixture<ItemGenerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGenerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGenerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
