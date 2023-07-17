import {View,Text} from "react-native";


import { BtmHomeStyle } from "../StylesSheet/ScreenStyle";
import Button from "../Components/Button";


export default function WalletScreen(){
   
    return(
        <View style={BtmHomeStyle.container}>
            <View style={{marginBottom:10}}>
                <Text style={BtmHomeStyle.textStyle}>
                Your wallet balance
                </Text>
            </View>
            <View style={{flex:0.1}}>
                <Text style={{fontFamily:"Poppins-medium",fontSize:20}}>0.00Pkr</Text>
            </View>
            <View>
                 <Button title={"Add Balance"}/>
            </View>
            
        </View>
    )
}