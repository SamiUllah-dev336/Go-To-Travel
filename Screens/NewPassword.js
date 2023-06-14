import {View,Text} from "react-native";
import { useState } from "react";
import { NewPassStyle } from "../StylesSheet/ScreenStyle";

//Components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";


export default function NewPasswordScreen({navigation}){
    const [Password,setPassword]=useState('')
    const [ConfirmPassword,setConfirmPassword]=useState('')
      return(
        <View style={NewPassStyle.container}>
            <View style={{  flex:0.1,marginTop:30}}>
                <Text style={{fontFamily:'Poppins-exbold',fontSize:20}}>Enter a new password</Text>
            </View>
      
            <View style={NewPassStyle.Email_Pass}>
            
                <View style={{marginBottom:20}}>
                <TextField
                label={"Password"}
                value={Password}
                onChangeText={(Password)=>setPassword(Password)}
                isPassword={true}
                />

                <TextField
                label={"Confirm Password"}
                value={ConfirmPassword}
                onChangeText={(ConfirmPassword)=>setConfirmPassword(ConfirmPassword)}
                isPassword={true}
                />

                </View>
            
                <Button navigation={navigation} title={"Change Password"} changeScreen={"ModalV"}/>
            </View>

            <View style={{flex:0.6}}>
                
            </View>
  
        
        </View>
    

      )
}