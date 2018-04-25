import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { PruebaProvider } from '../../providers/prueba/prueba';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {
    news:any=[]; /*Llamar a arreglo de cualquier tipo*/
    
  
  constructor(public navCtrl: NavController, public provider: PruebaProvider) {
    
  }

    doRefresh(refresher){
       setTimeout(() => {
         console.log('Async operation has ended');
         refresher.complete();
       }, 2000);
    }
    
    showNewsPage(article){
        this.navCtrl.push(
            NewsPage,
            {
                art : article
            }
            );    
    }
    
      ionViewDidEnter(){
        this.provider.getArticles().subscribe(
        result=>{
            this.news= result.articles;
            console.log("Texto: " + this.news + "...");
            },
            
            error => {
                console.log("Texto: " + error);
            },  
            ()=> 
                {
                  console.log("WELL DONE!");
            },  
        );
    }

    
    
}

