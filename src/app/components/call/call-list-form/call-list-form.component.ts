import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

import { Convocatoria } from '../../../models/convocatoria';

@Component({
  selector: 'app-call-list-form',
  templateUrl: './call-list-form.component.html',
  styleUrls: ['./call-list-form.component.css'],
  providers: [
  	GlobalService
  ]
})
export class CallListFormComponent implements OnInit {
	public convocatorias: Convocatoria;

  constructor(
  	private _globalService: GlobalService
  ) { 
  	this.convocatorias = new Convocatoria(0, '', '', '', '');
  }

  ngOnInit() {
  	this.getConvocatorias();
  }

  getConvocatorias(){
  	this._globalService.index('convocatoria').subscribe(
  		response => {
        console.log(response);
  			if(response.code == 200){
  				this.convocatorias = response.convocatorias;
  			}
  		},
  		error => {
  			console.log(<any>error);
  		}
  	);
  }

}
