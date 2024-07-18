import { Component } from '@angular/core';
import { OurClientsCardComponent } from "../our-clients-card/our-clients-card.component";


export interface IClientsSrc {
  src:string
}
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [OurClientsCardComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent {

  clientsSrc:IClientsSrc[] = [
    {
      src:'../../../assets/images/Frame (1).png'
    },
    {
      src:'../../../assets/images/racuten.png'
    },
    {
      src:'../../../assets/images/latice.png'
    },
    {
      src:'../../../assets/images/Frame (1).png'
    },
    {
      src:'../../../assets/images/racuten.png'
    },
    {
      src:'../../../assets/images/latice.png'
    }
  ]

}
