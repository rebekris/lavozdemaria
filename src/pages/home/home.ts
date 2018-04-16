import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  
  constructor(public navCtrl: NavController) {
    
  }


    doRefresh(refresher){
       setTimeout(() => {
         console.log('Async operation has ended');
         refresher.complete();
       }, 2000);
    }
    
    showNewsPage(){
        this.navCtrl.push(NewsPage);
    }

}
