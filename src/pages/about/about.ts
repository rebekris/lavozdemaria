import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  
  
  doRefresh(refresher){
       setTimeout(() => {
         console.log('Async operation has ended');
         refresher.complete();
       }, 2000);
    }

}
