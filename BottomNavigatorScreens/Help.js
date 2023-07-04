import {View,Text} from "react-native";
import { HelpStyle } from "../StylesSheet/ScreenStyle";
import { Linking } from "react-native";

import Icon  from "react-native-vector-icons/MaterialIcons";
import Icon1  from "react-native-vector-icons/Feather";

export default function HelpScreen(){
    const call=async ()=>{
        const phoneNumber = '03070052179';
        try {
            return await Linking.openURL(`tel:${phoneNumber}`);
        } catch (error) {
            return console.error('Failed to make phone call:', error);
        }
        
    }

    return(
        <View style={HelpStyle.container}>
            <View style={HelpStyle.innerContainer}>
               <View style={{flex:0.2}}>
                 <Icon name="help" size={70}  />
               </View>
               <View style={{flex:0.1}}>
                 <Text style={HelpStyle.textStyle}>
                    Need Help in Booking??
                </Text>
               </View>

               <View style={HelpStyle.comments}>
                 <Text style={{textAlign:"justify"}}>
                      Call our customer service team on the number below 
                      to speak to one of our advisor who will help you with 
                      all of your needs
                 </Text>
               </View>

               <View style={{flex:0.2,marginTop:10}}>
                  <Icon1 name="phone-call" size={70}  onPress={call}/>
               </View>
            </View>
        </View>
    )
}