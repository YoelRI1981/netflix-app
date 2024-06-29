import { HomeComponent } from './pages/home/home.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


import { MediaComponent } from './component/media/media.component';
import { Peliculas } from './interface/peliculas';
import { SeriesComponent } from './series/series.component';
import { FooterComponent } from './core/footer/footer.component';

import { PopularesComponent } from './populares/populares.component';
import { NavegadorComponent } from './navegador/navegador.component';
import { HeaderComponent } from './core/header/header.component';
import { Top10Component } from './pages/top10/top10.component';
import { PlayComponent } from './play/play.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HomeComponent,MediaComponent, SeriesComponent, PopularesComponent, NavegadorComponent, FooterComponent, HeaderComponent, Top10Component, PlayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'netflix-app';
}