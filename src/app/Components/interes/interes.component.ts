import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as M from 'materialize-css'

@Component({
  selector: 'app-interes',
  templateUrl: './interes.component.html',
  styleUrls: ['./interes.component.css']
})
export class InteresComponent implements OnInit, AfterViewInit{

  constructor(){}
    ngOnInit(): void{
  
}

ngAfterViewInit(){
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    autoClose:true,
  
  });
});
}
}