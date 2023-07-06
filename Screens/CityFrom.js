import React from "react";
import {View,Text} from "react-native";
import { BtmHomeStyle } from "../StylesSheet/ScreenStyle";
import CityFlatlist from "../Components/CityFlatlist";

export default function CityFromScreen({navigation}){

    return(
      <View style={BtmHomeStyle.container}>
        
         <View style={{flex:0.1,marginTop:40,alignSelf:'flex-start',marginLeft:20}}>
          <Text style={{fontFamily:'Poppins-bold',fontSize:25}}>Select City</Text>
         </View>

         <View style={{flex:0.9}}>
         <CityFlatlist navigation={navigation} press="CityFrom"/>
         </View>
         
      </View>

    )
   
}