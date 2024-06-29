import { Component, Input } from '@angular/core';

import { Peliculas } from '../../interface/peliculas';



@Component({
  selector: 'app-top10',
  standalone: true,
  imports: [],
  templateUrl: './top10.component.html',
  styleUrl: './top10.component.scss'
})
export class Top10Component {
  @Input() array:Peliculas[]= [];
  @Input() title:string = ""
}
