import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageGalaryComponent } from './image-galary.component';

describe('ImageGalaryComponent', () => {
  let component: ImageGalaryComponent;
  let fixture: ComponentFixture<ImageGalaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageGalaryComponent]
    });
    fixture = TestBed.createComponent(ImageGalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
