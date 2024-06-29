import { Component, Input } from '@angular/core';
import { Peliculas } from '../../interface/peliculas';


@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrl: './media.component.scss'
})
export class MediaComponent {
  @Input() array:Peliculas[]= [];
  @Input() title:string = "";
}
