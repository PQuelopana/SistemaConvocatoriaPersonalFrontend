import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';

@Injectable()
export class GlobalService {
	public url: string;

	constructor(
		public _http: HttpClient
	){
		this.url = global.url;
	}

	index(route: string, idFilter: number = 0): Observable<any>{
		let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
		
		let filter = '';
		if(idFilter > 0) filter = '/' + idFilter;

		return this._http.get(this.url + route + filter, {headers: headers});
	}

	dni(dni: string): Observable<any>{
		return this._http.get('https://dniruc.apisperu.com/api/v1/dni/'+dni+'?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InBpZXJxc0BnbWFpbC5jb20ifQ.H0c62bXNlM18NpadyoSVGqi6HfI09KpoBOeCWwWUxh8');
	}
}