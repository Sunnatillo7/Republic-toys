import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { VirtualRoomComponent } from '../../components/virtual-room/virtual-room.component';
import { TabsComponent } from '../../components/tabs/tabs.component';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { ClientCardComponent } from '../../components/client-card/client-card.component';
import { NgIf } from '@angular/common';
import { SpecialistCardComponent } from '../../components/specialist-card/specialist-card.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { OurClientsCardComponent } from '../../components/our-clients-card/our-clients-card.component';
import { ShareRouteService } from '../../services/shareRoute.service';


@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [VirtualRoomComponent, TabsComponent, GalleryComponent, ClientCardComponent, SpecialistCardComponent, SliderComponent, OurClientsCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
  encapsulation:ViewEncapsulation.None
})
export class AboutUsComponent implements OnInit {

  shareRouterService = inject(ShareRouteService)
ngOnInit(): void {
}

}
