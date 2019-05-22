import { Component, OnInit } from '@angular/core';
import {HeroDotaService} from '../services/hero-dota.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(private heroSV : HeroDotaService,private route:Router) { }

  ngOnInit() {
  }
  insert(form) {
    let hero_name = form.hero_name;
    let hero_status = form.hero_status;
    let hero_dmg = form.hero_dmg;
    
    this.heroSV.insert(hero_name, hero_status,hero_dmg).subscribe(
      
       );
       this.route.navigateByUrl("home");
       
  }
}

