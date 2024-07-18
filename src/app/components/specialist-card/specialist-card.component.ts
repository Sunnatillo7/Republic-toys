import { Component, Input } from '@angular/core';
import { ISpecialist } from '../tabs/tabs.component';

@Component({
  selector: 'app-specialist-card',
  standalone: true,
  imports: [],
  templateUrl: './specialist-card.component.html',
  styleUrl: './specialist-card.component.scss'
})
export class SpecialistCardComponent {
 @Input() item!:ISpecialist
}
