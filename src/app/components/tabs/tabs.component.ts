import { Component, Input } from '@angular/core';
import { SpecialistCardComponent } from '../specialist-card/specialist-card.component';


export interface ISpecialist {
  name: string,
  job: string,
  src: string
}
@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [SpecialistCardComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() forSpecialists!: boolean


  selectedTab = 1;

  selectTab(tabIndex: number) {
    this.selectedTab = tabIndex;
  }

  dataSpecialists: ISpecialist[] = [
    {
      name: 'Jeyms Merrot',
      job: 'Supervisor of collectors',
      src: '../../../assets/images/man.png'
    },
    {
      name: 'Benn Norton',
      job: 'Manager of collectors',
      src: '../../../assets/images/man2.png'
    },
    {
      name: 'Jeyms Merrot',
      job: 'Main collector',
      src: '../../../assets/images/man3.png'
    },
    {
      name: 'Jonatan Dykstra',
      job: 'Assistant collector',
      src: '../../../assets/images/man4.png'
    },
    {
      name: 'Jon Gudman',
      job: 'Assistant collector',
      src: '../../../assets/images/man5.png'
    },
    {
      name: 'Alan Roberts',
      job: 'Assistant collector',
      src: '../../../assets/images/man6.png'
    },
  ]
}
