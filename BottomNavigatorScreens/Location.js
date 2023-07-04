import {View,Text} from "react-native";
import { useState,useEffect } from "react";
import { BtmHomeStyle } from "../StylesSheet/ScreenStyle";

import MapView,{Marker} from "react-native-maps";
import * as Location from 'expo-location';


export default function LocationScreen(){
  const [location, setLocation] = useState(null); 
  const [locationName, setLocationName] = useState(''); 

    const regionchange=(region)=>{
      //console.log(region)
    }

    // hook

    useEffect(() => {
      // Request location permissions and get the current location
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          return;
        }
  
        let location= await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
        
        // // Reverse geocode the current location
        // let addressResponse = await Location.reverseGeocodeAsync(location.coords);
        // if (addressResponse.length > 0) {
        //   // Extract the relevant address components
        //   let address = addressResponse[0];
        //   let { name, street, city, region, country } = address;

        //   // Create the location name or title based on the available address components
        //   let locationTitle = [name, street, city, region, country]
        //     .filter(component => component)
        //     .join(', ');

        //   setLocationName(locationTitle);
        // }

        
        })();

    }, [location,locationName]);

    return(
           <View style={{flex:1,backgroundColor: "#E0FFFF"}}>
           {location&&( <MapView  onRegionChange={regionchange} 
                      style={{ flex: 1 }}
                      initialRegion={{
                      latitude: location.latitude,
                      longitude: location.longitude,
                      latitudeDelta: 3.45,
                      longitudeDelta: 3.45,
                      }}
                      >
                      <Marker
                      coordinate={{
                          latitude: location.latitude,
                          longitude:location.longitude
                      }}
                      title={locationName}
                      description="It is a Muslim country"
                      />
            
                  
           </MapView>)}
           </View>
        
    )
}

