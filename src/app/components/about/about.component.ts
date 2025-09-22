import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {



  openWhatsapp() {
  const phoneNumber = '+94759840406'; //  phone number
    const message = 'Hello! I have a question.'; 
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank');
   
  }

}
