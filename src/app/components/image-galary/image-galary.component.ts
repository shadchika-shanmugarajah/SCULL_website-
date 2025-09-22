import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-galary',
  templateUrl: './image-galary.component.html',
  styleUrls: ['./image-galary.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  clients: { image: string }[] = [];


  constructor() { }

  carouselOptions = {
    loop: true,
    margin: 10,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    },
    nav: false,
    autoplayHoverPause: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn'
  };

  showModal = false;
  enteredCode = '';

  ngOnInit(): void {
    // Load stored images from localStorage on initialization
    const storedImages = localStorage.getItem('uploadedImages');
    if (storedImages) {
      this.clients = JSON.parse(storedImages);
    }

  }

  // Open modal for entering the code
  openUploader() {
    this.showModal = true;
  }

  // Close the modal
  closeModal() {
    this.showModal = false;
    this.enteredCode = '';
  }

  // Validate code and open file picker if correct
  validateCode() {
    if (this.enteredCode === '40406') {
      this.closeModal();
      document.getElementById('fileInput')?.click();
    } else {
      alert('Incorrect code. Please try again.');
    }
  }

  // Handle file selection
  onFilesSelected(event: any) {
    const files = event.target.files as FileList; // Ensure files is treated as FileList
    if (files && files.length > 0) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
  
          // Add each new image to the gallery
          this.clients.push({ image: imageUrl });
  
          // Save updated images to localStorage
          localStorage.setItem('uploadedImages', JSON.stringify(this.clients));
        };
        reader.readAsDataURL(file);
      });
    }
  }

  

}
