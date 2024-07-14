import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header-footer',
  standalone: true,
  imports: [FooterComponent, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './header-footer.component.html',
  styleUrl: './header-footer.component.scss'
})
export class HeaderFooterComponent {
  pagesName = ['Toys', '360 Showroom', 'About Us', 'Contacts']

}
