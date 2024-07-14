import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule, } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderFooterComponent } from './components/header-footer/header-footer.component';
import { CardToysComponent } from './components/card-toys/card-toys.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatTooltipModule,MatIconModule, FooterComponent, HeaderFooterComponent, CardToysComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {



  pagesName = ['Toys', '360 Showroom', 'About Us', 'Contacts']
}
