import { Component } from '@angular/core';
import { CoopereteComponent } from '../../components/cooperete/cooperete.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ CoopereteComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
