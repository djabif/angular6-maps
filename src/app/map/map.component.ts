import { Component, OnInit, NgZone } from '@angular/core';
// import { google } from "google-maps";
import { } from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: any;
  markers: any;
  loading = true;
  autocomplete: any;
  GoogleAutocomplete: any;
  GooglePlaces: any;
  geocoder: any
  autocompleteItems: any;

  constructor(
    public zone: NgZone
  ) { }

  ngOnInit() {
    this.map = new google.maps.Map(document.getElementById('map'), {
	     center: { lat: -34.9011, lng: -56.1645 },
		   zoom: 15
	  });
    this.geocoder = new google.maps.Geocoder;
    let elem = document.createElement("div")
    this.GooglePlaces = new google.maps.places.PlacesService(elem);
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = {
      input: ''
    };
    this.autocompleteItems = [];
    this.loading = false;
    this.markers = [];
  }

  tryGeolocation(){
    this.loading = true;

    if (navigator.geolocation) {
      this.clearMarkers();//remove previous markers
      navigator.geolocation.getCurrentPosition(position => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let marker = new google.maps.Marker({
          position: pos,
          map: this.map,
          title: 'I am here!'
        });
        this.markers.push(marker);
        this.map.setCenter(pos);
        this.loading = false;
     }, err => {

       console.log("Error at center")
       this.loading = false;
     })
   } else {
     // Browser doesn't support Geolocation
     console.log("Browser doesn't support Geolocation")
     this.loading = false;
   }
  }

  updateSearchResults(event){
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
      (predictions, status) => {
        this.autocompleteItems = [];
        if(predictions){
          this.zone.run(() => {
            predictions.forEach((prediction) => {
              this.autocompleteItems.push(prediction);
            });
          });
        }
    });
  }

  selectSearchResult(item){
    this.clearMarkers();
    this.autocompleteItems = [];

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if(status === 'OK' && results[0]){
        let marker = new google.maps.Marker({
          position: results[0].geometry.location,
          map: this.map
        });
        this.markers.push(marker);
        this.map.setCenter(results[0].geometry.location);
      }
    })
  }

  clearMarkers(){
    for (var i = 0; i < this.markers.length; i++) {
      console.log(this.markers[i])
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

}
