import React, { useEffect } from 'react';
import Logout from './logout';

import './MapComponent.css'
const MapComponent = ({lat,long}) => {
  useEffect(() => {
    const initMap = () => {
      const pyrmont = new window.google.maps.LatLng(lat,long);
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: pyrmont,
        zoom: 12
      });

      // const userMarker = new window.google.maps.Marker({
      //   position: pyrmont,
      //   map: map,
      //   title: "Your Location",
      //   icon: {
      //     path: window.google.maps.SymbolPath.CIRCLE,
      //     scale: 10,
      //     fillColor: '#0000CD',  // Red color for your location
      //     fillOpacity: 1,
      //     strokeWeight: 0,
      //   },
      // });

      const userMarker = new window.google.maps.Marker({
        position: pyrmont,
        map: map,
        title: "Your Location",
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',  // URL of the blue marker icon
          scaledSize: new window.google.maps.Size(55, 55),  // Scaled size for a larger marker
        },
      });
      
      const request = {
        location: pyrmont,
        radius: '5000',
        type: ['hospital']
      };

      const service = new window.google.maps.places.PlacesService(map);
      service.nearbySearch(request, callback);

      function callback(results, status) {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          for (let i = 0; i < results.length; i++) {
            createMarker(results[i], map);
          }
        }
      }

      function createMarker(place, map) {
        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
      
        window.google.maps.event.addListener(marker, 'click', function () {
          const infowindow = new window.google.maps.InfoWindow();
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }
    };

    

    if (window.google) {
      initMap();
    } else {
      const script = document.createElement('script');
      // script.src =`you need to keep your google api`;
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
    
    <div id='logOut' className='logOut'>
      <div className='heading'>
      <h1>Near By Hospitals</h1></div>
      <div>
    <Logout/></div>
    </div>
     
    <div id="map" className='map'></div>
    </>
  );
};

export default MapComponent;
