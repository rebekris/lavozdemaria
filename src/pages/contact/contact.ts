import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
    
    @ViewChild('map') mapRef: ElementRef;

  constructor(public navCtrl: NavController) {

  }
  
  ionViewDidLoad(){
    this.showMap();
  }
  
  showMap(){
    const location= new google.maps.LatLng(-2.142953, -79.895051);
  
    const options= {
        center: location,
        zoom: 14
    };
    
    const map= new google.maps.Map(this.mapRef.nativeElement, options);
    
    this.addMarker(location, map);
  }

    addMarker(position, map){
        return new google.maps.Marker({
            position,
            map
        });
    }

}
