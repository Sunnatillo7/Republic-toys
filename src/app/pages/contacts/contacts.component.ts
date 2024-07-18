import { Component } from '@angular/core';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { CoopereteComponent } from '../../components/cooperete/cooperete.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [GoogleMapComponent, CoopereteComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
