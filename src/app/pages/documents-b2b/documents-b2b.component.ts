import { Component } from '@angular/core';

@Component({
  selector: 'app-documents-b2b',
  standalone: true,
  imports: [],
  templateUrl: './documents-b2b.component.html',
  styleUrl: './documents-b2b.component.scss'
})
export class DocumentsB2bComponent {


  documents = [
    'Privacy Policy ↓',
    'Terms and conditions ↓',
    'Toys catalog ↓',
    '“The Republic of Toys” responsible disclosure policy ↓',
    'Certificate ↓',
    'Wholesale B2B sales ↓',
    'Replacement parts ↓',
    'Shipping and returns ↓',
    'Payment Methods ↓'
  ]

}
