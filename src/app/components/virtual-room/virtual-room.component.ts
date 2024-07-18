import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-virtual-room',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './virtual-room.component.html',
  styleUrl: './virtual-room.component.scss'
})
export class VirtualRoomComponent  {

  @Input() place !:string



}
