import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {

  savedArticles: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.savedArticles= this.navParams.get('art');
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsPage');
  }
  
  
  
  share(){
  	let self= this;
  	let description = self.user + " has given you a FREE Takay Blend. To claim your free ready-to-blend superfood meal, enter the promo code " + self.coupon[0].name + " on your first purchase.";

  	this.socialSharing.share(description, 'Takay Blend','', ' Find more at www.takayblends.com').then(function() {
	  console.log('Successful share');
	}).catch(function(error) {
	  console.log('Error sharing:', error)
	})

     

  }

}
