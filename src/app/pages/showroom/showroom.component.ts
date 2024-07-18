import { Component } from '@angular/core';
import { VirtualRoomComponent } from '../../components/virtual-room/virtual-room.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';

@Component({
  selector: 'app-showroom',
  standalone: true,
  imports: [VirtualRoomComponent, GalleryComponent],
  templateUrl: './showroom.component.html',
  styleUrl: './showroom.component.scss'
})
export class ShowroomComponent {

}
