import { StyleSheet,Text,View } from "react-native";
import { DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props){
    return(
        <View style={style.container}>
            <View style={{marginTop:50}}>
            <DrawerItemList {...props}/>
            </View>
        </View>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#f5fffa",
    }
})