import {Text,View } from "react-native";
import React from "react";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import { Alert } from "react-native";

const SearchCityField=({label,navigation,press})=>{
     
  const { globalState } = React.useContext(GlobalContext);

     return(
     <View style={{   
                justifyContent:"center",
                height:50,
                width:300,
                marginBottom:10,
                backgroundColor:"white",
                borderRadius:10,
                shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                 }}
                 
                 
                 >
     <Text style={{marginLeft:10}} onPress={()=>{ if(globalState.city=="Enter city" && press=="CityTo"){
                                                   Alert.alert("Select origin first");
                                                   return;
                                                  }
                                                   navigation.navigate(press)}}> 
          {label}
    </Text>
     </View>
     );
}

export {SearchCityField};

