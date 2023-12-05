import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as M from 'materialize-css'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit{

  constructor(){ }
  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        indicators:true,
        fullWidth:true
      });
    });
  }
}
