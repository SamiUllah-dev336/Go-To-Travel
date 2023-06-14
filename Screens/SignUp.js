import {TouchableOpacity,View ,Text,KeyboardAvoidingView, ScrollView} from "react-native";
import { useState } from "react";

// componenta
import { TextField} from "../Components/TextField";
import Header from "../Components/Header";
import Button from "../Components/Button";

import { SignUpstyles } from "../StylesSheet/ScreenStyle";


export default function SignUpScreen({navigation}){
  const [Name,setName]=useState('')
  const [Phone,setPhone]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [ConfirmPassword,setConfirmPassword]=useState('')

  const disab=()=>{
    return (!Name || !ConfirmPassword || !isSelected || !Password || !Phone);
  }

  
  return(
   
    <View style={SignUpstyles.container}>
      <ScrollView>

      <View style={{  flex:0.1}}>
        <Header head='Sign Up' navigation={navigation}/> 
      </View>
    
      <View style={SignUpstyles.outerV_F}>
        <Text style={SignUpstyles.textHeader}>Email</Text> 
      
        <TextField
        label={"Email"}
        value={Email}
        onChangeText={(Email)=>setEmail(Email)}
        />

        <Text style={SignUpstyles.textHeader}>Name</Text>
      
        <TextField
        label={"Name"}
        value={Name}
        onChangeText={(Name)=>setName(Name)}
        />

      
        <Text style={SignUpstyles.textHeader}>Phone</Text>
      
        <TextField
        label={"Phone"}
        value={Phone}
        onChangeText={(Phone)=>setPhone(Phone)}
        keybtype={"phone-pad"}
        />
        
        <Text style={SignUpstyles.textHeader}>Password</Text>
      
        <TextField
        label={"Password"}
        value={Password}
        onChangeText={(Password)=>setPassword(Password)}
        isPassword={true}
        />
    
        <Text style={SignUpstyles.textHeader}>Confirm Password</Text>
      
        <TextField
        label={"Confirm Password"}
        value={ConfirmPassword}
        onChangeText={(ConfirmPassword)=>setConfirmPassword(ConfirmPassword)}
        isPassword={true}
        />
        
        <Button navigation={navigation} title={"SignUp"}/>
      </View>

      <View style={SignUpstyles.signIn}>
        <Text>Already have an account?</Text>
        <TouchableOpacity 
              onPress={()=>{
                      navigation.goBack("Login");  // or use navigate
                      }}>
          <Text style={{fontFamily:'Poppins-bold',marginTop:5}}>Sign in</Text>
        </TouchableOpacity>
      </View>
      
     
      </ScrollView>                  
    </View>

   )

}


{/* <View style={SignUpstyles.checkbOuter}>
      <CheckBox
        isChecked={isSelected}
        onClick={()=>setisSelected(!isSelected)}
        style={SignUpstyles.checkbx}
      />
        <Text>I accept the term of use and privacy policy</Text>
      </View> */}
        { /*sign up buuton =>onPress={handleSignup}   style={[SignUpstyles.button,{backgroundColor:disab()?"#000000":"grey"}]} 
                        disabled={disab()}*/}


