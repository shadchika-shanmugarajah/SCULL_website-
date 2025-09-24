import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  images: string[] = [
    
    '/assets/images/scull-0.jpg',
    '/assets/images/scull-1.jpg',
    '/assets/images/scull-2.jpg',
    '/assets/images/scull-3.jpg',
    '/assets/images/scull-4.jpg',
    '/assets/images/scull-5.jpg',
    '/assets/images/scull-6.jpg',
    '/assets/images/scull-7.jpg',
    '/assets/images/scull-8.jpg',
    '/assets/images/scull-9.jpg',
    '/assets/images/scull-10.jpg',
    '/assets/images/scull-11.jpg',
    '/assets/images/scull-12.jpg',
    '/assets/images/scull-13.jpg',
    '/assets/images/scull-14.jpg',
    '/assets/images/scull-15.jpg',
    '/assets/images/scull-16.jpg',
    '/assets/images/scull-17.jpg',
    '/assets/images/scull-18.jpg',
    '/assets/images/scull-19.jpg',
    '/assets/images/scull-20.jpg',
    '/assets/images/scull-21.jpg',
    '/assets/images/scull-22.jpg',
    '/assets/images/scull-23.jpg',
    '/assets/images/scull-24.jpg',
    '/assets/images/scull-25.jpg',
    '/assets/images/scull-26.jpg',
    '/assets/images/scull-27.jpg',
    '/assets/images/scull-28.jpg',
    
    '/assets/images/scull-30.jpg',
    '/assets/images/scull-31.jpg',
    '/assets/images/scull-33.jpg',
    '/assets/images/scull-230.jpg',
    
    
  ];

  currentIndex: number = 0;
  slidesPerView: number = 1;
  selectedIndex: number | null = null;
  groupStartIndex: number = 0;
  autoTimer: any = null;

  ngOnInit(): void {
    this.updateSlidesPerView();
    // Slideshow shows one image at a time
    this.startAuto();
  }

  ngOnDestroy(): void {
    this.pauseAuto();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateSlidesPerView();
    this.snapToBounds();
    // no-op
  }

  private updateSlidesPerView(): void {
    this.slidesPerView = 1;
  }

  // removed responsive triplet sizing

  private snapToBounds(): void {
    const maxIndex = Math.max(0, this.images.length - this.slidesPerView);
    this.currentIndex = Math.min(this.currentIndex, maxIndex);
  }

  next(): void {
    const step = this.getSlotsPerView();
    this.groupStartIndex = (this.groupStartIndex + step) % this.images.length;
  }

  prev(): void {
    const step = this.getSlotsPerView();
    this.groupStartIndex = (this.groupStartIndex - step + this.images.length) % this.images.length;
  }

  isSlideVisible(index: number): boolean {
    // not used for grid view
    return true;
  }

  goTo(index: number): void {
    this.currentIndex = index;
  }

  open(index: number): void {
    this.selectedIndex = index;
    this.currentIndex = index;
  }

  close(): void {
    this.selectedIndex = null;
  }

  // removed triplet showcase helpers

  trackByIndex(_: number, idx: number): number { return idx; }

  private touchStartX: number | null = null;
  private touchDeltaX: number = 0;

  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.touches[0]?.clientX ?? null;
    this.touchDeltaX = 0;
  }

  onTouchMove(event: TouchEvent): void {
    if (this.touchStartX == null) return;
    const currentX = event.touches[0]?.clientX ?? this.touchStartX;
    this.touchDeltaX = currentX - this.touchStartX;
  }

  onTouchEnd(_: TouchEvent): void {
    if (this.touchStartX == null) return;
    const threshold = 40; // px
    if (this.touchDeltaX <= -threshold) this.next();
    if (this.touchDeltaX >= threshold) this.prev();
    this.touchStartX = null;
    this.touchDeltaX = 0;
  }

  // Autoplay controls removed

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }

  getSlotsPerView(): number {
    const width = window.innerWidth;
    if (width <= 640) return 1;
    if (width <= 1024) return 2;
    return 3;
  }

  getVisibleIndices(): number[] {
    const slots = this.getSlotsPerView();
    const out: number[] = [];
    for (let i = 0; i < Math.min(slots, this.images.length); i++) {
      out.push((this.groupStartIndex + i) % this.images.length);
    }
    return out;
  }

  startAuto(): void {
    this.pauseAuto();
    this.autoTimer = setInterval(() => this.next(), 4000);
  }

  pauseAuto(): void {
    if (this.autoTimer) {
      clearInterval(this.autoTimer);
      this.autoTimer = null;
    }
  }

  resumeAuto(): void {
    this.startAuto();
  }
}