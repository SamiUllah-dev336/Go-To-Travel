import { View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props){
    return(
        <View style={{ flex:1,backgroundColor:"#f5fffa"}}>
            <View>
            <DrawerItemList {...props}/>
            </View>
        </View>
    )
}
