import {View,Text, TouchableOpacity,KeyboardAvoidingView} from "react-native";
import { useState } from "react";
import { ForgetStyle } from "../StylesSheet/ScreenStyle"

//Components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";
import Header from "../Components/Header";

export default function ForgetPasswordScreen({navigation}){
    const [Email,setEmail]=useState('')
      return(
        <View style={ForgetStyle.container}>
             <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <View style={{  flex:0.1}}>
                <Header head="ForgetPassword"  navigation={navigation} />
            </View>
      
            <View style={ForgetStyle.Email_Pass}>
                <Text style={ForgetStyle.textHeader}>Email</Text> 
                
                <View style={{marginBottom:20}}>
                <TextField
                label={"Email"}
                value={Email}
                onChangeText={(Email)=>setEmail(Email)}
                />
                </View>
            
                <Button navigation={navigation} title={"Send Code"} changeScreen={"Verification"}/>
            </View>

            <View style={{flex:0.6,flexDirection:'row'}}>
                <Text style={{fontFamily:"Poppins-regular"}}>Don't receive an email yet?</Text>
                <TouchableOpacity>
                    <Text style={{fontFamily:'Poppins-exbold'}}>Resend</Text>
                </TouchableOpacity>
            </View>
  
            </KeyboardAvoidingView>

        </View>
    

      )
}