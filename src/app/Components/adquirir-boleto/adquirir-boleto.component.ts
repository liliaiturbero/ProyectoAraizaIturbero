
import { AfterViewInit, Component} from '@angular/core';

import * as M from 'materialize-css'

@Component({
  selector: 'app-adquirir-boleto',
  templateUrl: './adquirir-boleto.component.html',
  styleUrls: ['./adquirir-boleto.component.css']
})
export class AdquirirBoletoComponent implements AfterViewInit{

  constructor(){}
   

ngAfterViewInit(){
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var instances = M.Datepicker.init(elems, {
    autoClose:true,
  
  });
});
}
}