import { Component } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-email-marketing',
  templateUrl: './email-marketing.component.html',
  styleUrl: './email-marketing.component.css'
})
export class EmailMarketingComponent {
  faArrowRight = faArrowRight;
 // enquiry form buttons function 
 selectedInterest: string = 'None';
 interests = [
   { value: '5', label: 'Marketing' },
   { value: '4', label: 'Web Development' },
   { value: '3', label: 'Graphic Design' },
   { value: '2', label: 'Consulting' },
   { value: '1', label: 'Influencer Marketing' }
 ];

 onInterestSelect(interest: string) {
   this.selectedInterest = interest;
 }
}
