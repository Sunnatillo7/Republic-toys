import { Component, Input } from '@angular/core';
import { IClientsSrc } from '../slider/slider.component';

@Component({
  selector: 'app-our-clients-card',
  standalone: true,
  imports: [],
  templateUrl: './our-clients-card.component.html',
  styleUrl: './our-clients-card.component.scss'
})
export class OurClientsCardComponent {

  @Input() src!:IClientsSrc

}
