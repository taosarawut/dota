import { Component, OnInit } from '@angular/core';
import {HeroDotaService} from '../services/hero-dota.service';
import {Subscription} from 'rxjs'
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  subscription : Subscription;
  dataList : any = [];
  dataRow = 0;
  hero_id : string;

  constructor(private heroSV : HeroDotaService ,
              private route:Router,
              private router: ActivatedRoute) {
    this.showData(); 
  }
  showData(){
    let hero_id = this.hero_id = (this.router.snapshot.paramMap.get('hero_id'));
    this.subscription=this.heroSV.get(hero_id)
    .subscribe(
      data =>{
        this.dataList = data['rs'];
      }
    )
  }

  edit(form) {
    let hero_id = this.hero_id = (this.router.snapshot.paramMap.get('hero_id'));
    let hero_name = form.hero_name;
    let hero_status = form.hero_status;
    let hero_dmg = form.hero_dmg;

    
    this.heroSV.edit(hero_id , hero_name, hero_status, hero_dmg).subscribe(
      
       );
       this.route.navigateByUrl("home");
       console.log(hero_id + hero_name + hero_status + hero_dmg);
       
  }
  ngOnInit() {
  }
  
  
}