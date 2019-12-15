import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
	public estadosCivil: string[];

  constructor() { }

  ngOnInit() {
  	this.getEstadosCivil();
  }

  getEstadosCivil(){
  	
  	this.estadosCivil = new Array<string>();

  	this.estadosCivil.push('SOLTERO');
  	this.estadosCivil.push('CASADO');
  	this.estadosCivil.push('DIVORCIADO');
  	this.estadosCivil.push('VIUDO');
  }
}
