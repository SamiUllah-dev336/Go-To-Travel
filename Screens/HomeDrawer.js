import {View} from "react-native";
import { DrawerNavigator } from "../Components/DrawerNavigator";

export default function HomeDrawerScreen(){

    return(
      <View style={{flex:1,backgroundColor:'orange'}}>
      <DrawerNavigator/>
      </View>  
    )
}