import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { PruebaProvider } from '../../providers/prueba/prueba';

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
        this.provider.getArticles('mihttp.net/demo/lavozdemaria/end/get/content/tagarticles?tagid=2').subscribe(
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