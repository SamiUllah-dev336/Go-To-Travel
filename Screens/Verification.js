import {View,Text} from "react-native";
import { useState } from "react";
import { ForgetStyle } from "../StylesSheet/ScreenStyle"

//Components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";

export default function VerificationScreen({navigation}){
    const [Code,setCode]=useState("")
      return(
        // style same as forget password
        <View style={ForgetStyle.container}>
            <View style={{  flex:0.1,marginTop:30}}>
                <Text style={{fontFamily:"Poppins-bold",fontSize:23}}>Verification</Text>
            </View>
      
            <View style={ForgetStyle.Email_Pass}>
                <Text style={ForgetStyle.textHeader}>Code</Text> 
                
                <View style={{marginBottom:20}}>
                <TextField
                label={"Code"}
                value={Code}
                onChangeText={(Code)=>setCode(Code)}
                keybtype={"decimal-pad"}
                />
                </View>
            
                <Button navigation={navigation} title={"Verification"} changeScreen={"NewPassword"}/>
            </View>

            <View style={{flex:0.7}}>
            </View>
  
        
        </View>
    

      )
}