import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { AboutComponent } from './components/about/about.component';
import { ResultsComponent } from './components/results/results.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,BannerComponent,FeaturesComponent,AboutComponent,ResultsComponent,FaqsComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AppLandingPage';


}
