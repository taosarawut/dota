import { Component } from '@angular/core';
import {HeroDotaService} from '../services/hero-dota.service'
import { Subscription } from 'rxjs';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  subscriptiom : Subscription;
  dataList : any [];

  constructor(private heroSv : HeroDotaService ,
              private route:Router){
    this.showData();
  }


  showData(){
    this.subscriptiom = this.heroSv.getHeroDota()
    .subscribe(data =>
      {
       this.dataList = data['rs'];
      }
      );
    }
  Add(){
    this.route.navigateByUrl("createdota");
  }

  edit(hero_id) { 
    this.route.navigate(['/edit',{hero_id : hero_id}]);
  }

  Delete(hero_id) {
    
    this.heroSv.del(hero_id).subscribe(
       );
       this.showData();
  }
  /*ngAfterViewInit(){
    this.showData();
  }*/
}