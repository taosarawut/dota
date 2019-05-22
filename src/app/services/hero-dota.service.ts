import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HeroDotaService {

  apiUrl: string = "http://localhost/gamedota/process/heroapi.php";
  constructor(public http: HttpClient) { }

  getHeroDota(){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'select'
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }

  get(hero_id : any){
    const header = {'Content-Type': 'application/json'};
    let data = {
      'cmd' : 'selectone',
      'hero_id' : hero_id
    }
    return this.http.post(this.apiUrl,data, {headers: header});
  }
  insert( hero_name: string, hero_status: string, hero_dmg: string){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'insert',
      'hero_name': hero_name,
      'hero_status': hero_status,
      'hero_dmg': hero_dmg
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  del( hero_id : any){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'delete',
      'hero_id' : hero_id
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
  
  edit( hero_id: any , hero_name: string,hero_status:any,hero_dmg:any	){
    const header = { 'Content-Type': 'application/json' };
    let data = {
      'cmd' : 'edit',
      'hero_id' : hero_id ,
      'hero_name': hero_name,
      'hero_status':hero_status,
      'hero_dmg': hero_dmg,
     
    }
    return this.http.post(this.apiUrl, data, { headers: header });
  }
}
