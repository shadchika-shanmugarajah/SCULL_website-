import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoGalleryComponent } from './photo-gallery.component';

describe('PhotoGalleryComponent', () => {
  let component: PhotoGalleryComponent;
  let fixture: ComponentFixture<PhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an images array', () => {
    expect(component.images).toBeDefined();
    expect(Array.isArray(component.images)).toBeTrue();
  });

  it('should render images in the template', () => {
    component.images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const imgElements = compiled.querySelectorAll('img');
    expect(imgElements.length).toBe(component.images.length);
  });
});