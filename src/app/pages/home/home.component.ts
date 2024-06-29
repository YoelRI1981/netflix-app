import { Peliculas } from './../../interface/peliculas';
import { Component } from '@angular/core';
import { MediaComponent } from '../../component/media/media.component';
import { Top10Component } from '../top10/top10.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MediaComponent, Top10Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  comedyFilms: Peliculas[] = 
    [
          {

            genre: 'Comedia',
            title: 'Casi 300.',
            image: '../assets/images/Comedia/casi300.webp',
    
           
          },
          {
            genre: 'Comedia',
            title: 'Los caza fantasmas.',
    
            image: '../assets/images/Comedia/cazafantasmas.webp',
    
           
          },
          {
            genre: 'Comedia',
            title: 'El dictador.',
    
            image: '../assets/images/Comedia/dictador.webp',
    
          },
          {
            genre: 'Comedia',
            title: 'Erase una vez en Hollywood.',
    
            image: '../assets/images/Comedia/erasehollywood.webp',
    
          
          },
          {
            genre: 'Comedia',
            title: 'Padre de familia.',
    
            image: '../assets/images/Comedia/family guy.webp',
    
           
          },
          {
            genre: 'Comedia',
            title: 'Juerga hasta el fin.',
    
            image: '../assets/images/Comedia/juerga.webp',
    
          },
          {
            genre: 'Comedia',
            title: 'La terminal.',
    
            image: '../assets/images/Comedia/laterminal.webp',
    
          },
          {
            genre: 'Comedia',
            title: 'Los padres de ella.',
    
            image: '../assets/images/Comedia/padresella.webp',
    
          
          },
          {
            genre: 'Comedia',
            title: 'Regreso al futuro.',
    
            image: '../assets/images/Comedia/regresofuturo.webp',
    
         
          },
          {
            genre: 'Comedia',
            title: 'Rick y Morty.',
    
            image: '../assets/images/Comedia/rickandmorty.webp',
    
        
          },
          {
            genre: 'Comedia',
            title: 'Scary movie 3.',
    
            image: '../assets/images/Comedia/scarymovie3.webp',
    
         
          },
          {genre: 'Comedia',
            title: 'Ted 2.',
    
            image: '../assets/images/Comedia/ted2.webp',
          }
        ];
    
      animeFilms: Peliculas[] = [
          {
            genre: "Anime",
            title: 'Ajin',
    
            image: '../assets/images/Anime/ajin.jpg',
          },
          {
            genre: "Anime",
            title: 'El castillo ambulante',
    
            image: '../assets/images/Anime/castilloambulante.webp',
          },
          {
            genre: "Anime",
            title: 'El viaje de chihiro',
    
            image: '../assets/images/Anime/chihiro.webp',
          },
          {
            genre: "Anime",
            title: 'Evangelion',
    
            image: '../assets/images/Anime/evangelion.webp',
          },
          {genre: "Anime",
            title: 'Gitsarise',
    
            image: '../assets/images/Anime/gitsarise.webp',
          },
          {
            genre: "Anime",
            title: 'Gundam',
    
            image: '../assets/images/Anime/gundam.webp',
          },
          {
            genre: "Anime",
            title: 'Laputa',
    
            image: '../assets/images/Anime/laputa.webp',
          },
          {
            genre: "Anime",
            title: 'mononoke',
    
            image: '../assets/images/Anime/mononoke.webp',
          },
          {
            genre: "Anime",
            title: 'ninokuni',
    
            image: '../assets/images/Anime/ninokuni.jpg',
          },
          {
            genre: "Anime",
            title: 'perfect blue',
    
            image: '../assets/images/Anime/perfectblue.webp',
          },
          {
            genre: "Anime",
            title: 'Porco Rosso',
    
            image: '../assets/images/Anime/porcorosso.webp',
          },
        ]
      ;
    
      actionFilms: Peliculas[] = [
          {
            genre: "Accion",
            title: 'Ejercito Muerto',
    
            image: '../assets/images/Accion/ejercitomuertos.jpg',
          },
          {
            genre: "Accion",
            title: 'El Proctector',
    
            image: '../assets/images/Accion/elprotector.webp',
          },
          {
            genre: "Accion",
            title: 'Equializar2',
    
            image: '../assets/images/Accion/equalizer2.webp',
          },
          {
            genre: "Accion",
            title: 'Heat',
    
            image: '../assets/images/Accion/heat.webp',
          },
          {
            genre: "Accion",
            title: 'jackrearcher',
    
            image: '../assets/images/Accion/jackreacher.webp',
          },
          {
            genre: "Accion",
            title: 'johnwick2',
    
            image: '..assetsimagesAccionjohnwick2.webp',
          },
          {
            genre: "Accion",
            title: 'killbil2',
    
            image: '../assets/images/Accion/killbill2.webp',
          },
          {
            genre: "Accion",
            title: 'Mision Impobile',
    
            image: '../assets/images/Accion/misionimposiblenacion.webp',
          },
          {
            genre: "Accion",
            title: 'Renacido',
    
            image: '../assets/images/Accion/renacido.webp',
          },
          {
            genre: "Accion",
            title: 'Worldwarz',
    
            image: '../assets/images/Accion/worldwarz.webp',
          }
        ];
    
      terrorFilms: Peliculas[ ]= [
          {
            genre:"Terror",
            title: 'Apostol',
    
            image: '../assets/images/Terror/apostol.jpg',
          },
          {
            genre:"Terror",
            title: 'calleterror',
    
            image: '../assets/images/Terror/calleterror.jpg',
          },
          {
            genre:"Terror",
            title: 'infiernoagua',
    
            image: '../assets/images/Terror/infiernoagua.webp',
          },
          {
            genre:"Terror",
            title: 'insidius 2',
    
            image: '../assets/images/Terror/insidious2.webp',
          },
          {
            genre:"Terror",
            title: 'life',
    
            image: '../assets/images/Terror/life.webp',
          },
          {
            genre:"Terror",
            title: 'malasana',
    
            image: '../assets/images/Terror/malasana.webp',
          },
          {
            genre:"Terror",
            title: 'multuble',
    
            image: '../assets/images/Terror/multiple.webp',
          },
          {
            genre:"Terror",
            title: 'reflejos',
    
            image: '../assets/images/Terror/reflejos.webp',
          }
        ];
    
      dramaFilms: Peliculas[] = [
          {
            genre: "Drama",
            title: '1917',
    
            image: '../assets/images/Drama/1917.webp',
          },
          {
            genre: "Drama",
            title: 'Arrival',
    
            image: '../assets/images/Drama/arrival.webp',
          },
          {
            genre: "Drama",
            title: 'Clublucha',
    
            image: '../assets/images/Drama/clublucha.webp',
          },
          {
            genre: "Drama",
            title: 'Corazones',
    
            image: '../assets/images/Drama/corazones.webp',
          },
          {
            genre: "Drama",
            title: 'Culpable',
    
            image: '../assets/images/Drama/culpable.webp',
          },
          {
            genre: "Drama",
            title: 'Milla verde',
    
            image: '../assets/images/Drama/millaverde.webp',
          },
          {
            genre: "Drama",
            title: 'Naufrago',
    
            image: '../assets/images/Drama/naufrago.webp',
          },
          {
            genre: "Drama",
            title: 'No es pais para viejos',
    
            image: '../assets/images/Drama/noespais.webp',
          },
          {
            genre: "Drama",
            title: 'Salvar al soldado Ryan',
    
            image: '../assets/images/Drama/salvaralsoldado.jpg',
          },
          {
            genre: "Drama",
            title: 'scarface',
    
            image: '../assets/images/Drama/scarface.webp',
          },
          {
            genre: "Drama",
            title: 'Schindler',
    
            image: '../assets/images/Drama/schindler.webp',
          },
          {
            genre: "Drama",
            title: 'Sombra diablo',
    
            image: '../assets/images/Drama/sombradiablo.webp',
          },
          {
            genre: "Drama",
            title: 'El ultimo superviviente.',
    
            image: '../assets/images/Drama/unicosuperviviente.webp',
          },
        ];
    
      sciFiFilms: Peliculas[] =[
          {
            genre: "Sci-Fi",
            title: '6dia',
    
            image: '../assets/images/Sci-fi/6dia.webp',
          },
          {
            genre: "Sci-Fi",
            title: '12 monos',
    
            image: '../assets/images/Sci-fi/12monos.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'Afterearth',
    
            image: '../assets/images/Sci-fi/afterearth.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'colverparadox',
    
            image: '../assets/images/Sci-fi/colverparadox.jpg',
          },
          {
            genre: "Sci-Fi",
            title: 'core',
    
            image: '../assets/images/Sci-fi/core.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'deepimpact',
    
            image: '../assets/images/Sci-fi/deepimpact.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'doom',
    
            image: '../assets/images/Sci-fi/doom.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'Gits',
    
            image: '../assets/images/Sci-fi/gits.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'Jumper',
    
            image: '../assets/images/Sci-fi/jumper.webp',
          },
          {
            genre: "Sci-Fi",
            title: 'Passengers',
    
            image: '../assets/images/Sci-fi/passengers.webp',
          },
        ];
      
    
      top10: Peliculas[] = [
          {
            genre: "Top 10",
            title: 'papel',
    
            image: '../assets/images/Top10/1-papel.webp',
          },
          {
            genre: "Top 10",
            title: 'reina',
    
            image: '../assets/images/Top10/2-reina.webp',
          },
          {
            genre: "Top 10",
            title: 'titanes',
    
            image: '../assets/images/Top10/3-titanes.webp',
          },
          {
            genre: "Top 10",
            title: 'lostinspace',
    
            image: '../assets/images/Top10/4-lostinspace.webp',
          },
          {
            genre: "Top 10",
            title: 'dondecaben',
    
            image: '../assets/images/Top10/5-dondecaben.webp',
          },
          {
            genre: "Top 10",
            title: 'aquinohay',
    
            image: '../assets/images/Top10/6-aquinohay.webp',
          },
          {
            genre: "Top 10",
            title: 'blacklist',
    
            image: '../assets/images/Top10/7-blacklist.webp',
          },
          {
            genre: "Top 10",
            title: 'ricos',
    
            image: '../assets/images/Top10/8-ricos.webp',
          },
          {
            genre: "Top 10",
            title: 'poder',
    
            image: '../assets/images/Top10/9-poder.webp',
          },
          {
            genre: "Top 10",
            title: 'gooddoctor',
    
            image: '../assets/images/Top10/10-gooddoctor.webp',
          },
        ];
    
      
      }
