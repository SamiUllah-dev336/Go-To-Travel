import {View,Text} from "react-native";
import { DrawerNavigator } from "../Components/DrawerNavigator";


export default function HomeScreen(){
    return(
        <View style={{flex:1}}>
            <DrawerNavigator/>
        </View>
    )
}