import {View,Text, TouchableOpacity,Alert} from "react-native";
import { useState } from "react";
import { ForgetStyle } from "../StylesSheet/ScreenStyle"

//Components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";
import Header from "../Components/Header";
import { ScrollView } from "react-native-gesture-handler";
import {sendPasswordResetEmail} from "firebase/auth";
import {auth} from "../firebase";

export default function ForgetPasswordScreen({navigation}){
    const [Email,setEmail]=useState('');

    const reset=async()=>{
        if(!Email){
          Alert.alert("Please enter email");
          return;
        }

        await sendPasswordResetEmail(auth,Email)
        .then(() => {
          Alert.alert("Password reset email is sent!After that Login new Password");

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });

    }

      return(
        <View style={ForgetStyle.container}>
            <ScrollView>
            <View style={{flex:0.1}}>
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
    
               <Button title={"ChangePassword"} handle={reset}/>
            </View>
            
            <View style={{flex:0.6}}> 
              <View style={{flexDirection:'row',marginTop:40}}>
                  <Text style={{fontFamily:"Poppins-regular",marginLeft:30}}>Don't receive an email yet?</Text>
                  <TouchableOpacity onPress={reset}>
                      <Text style={{fontFamily:'Poppins-exbold'}}>Resend</Text>
                  </TouchableOpacity>
              </View>

              <View style={{flexDirection:'row'}}>
                <Text style={{fontFamily:"Poppins-regular",marginLeft:50}}>Password has entered?</Text>
                <TouchableOpacity onPress={()=>{if(Email){
                                               navigation.navigate("Login")}}}>
                    <Text style={{fontFamily:'Poppins-exbold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            </View>


            </ScrollView>
        </View>
    

      )
}