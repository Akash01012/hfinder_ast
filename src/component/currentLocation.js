import Reat, { useEffect, useState } from 'react'
import MapComponent from './MapComponent';

function CurrentLocation() {
   const [lat, setLatitude] = useState('');
   const [long, setLongitude] = useState('');
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setLoading(false); 
      },
      (error) => {
        console.log(error);
        setLoading(false); 
      }
    );
  }, []);

    return (
        <div>
        <div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <MapComponent lat={lat} long={long} /> 
          )}
        </div>
      </div>
        
    );
};

export default CurrentLocation;