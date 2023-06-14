import { useState } from "react";
import { Loginstylesheet,View,Text,Image,TextInput,TouchableOpacity } from "react-native";

// components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";

// styles
import { Loginstyles } from "../StylesSheet/ScreenStyle";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rs
} from "react-native-responsive-dimensions";


export default function LoginScreen({navigation}){
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')

    const handleLogin=()=>{
     console.log("handle login")
    }

    return(
        <View style={Loginstyles.container}>
        
          <View style={{ flex:0.4}}>
            <Image
            style={Loginstyles.logo}
            source={require('../assets/Logo.png')}
            />
          </View>

          <View style={{flex:0.05,alignItems:"center"}}>
              <Text style={{fontFamily:'Poppins-bold',
                            fontSize:rs(2)
                            }}>
              Login
              </Text>
          </View>
        
          <View style={Loginstyles.EM_PS_login}>
          {/* <Icon name="email" size={30} style={Loginstyles.icon}/>  */}
                <TextField
                label={"Email"}
                value={Email}
                onChangeText={(Email)=>setEmail(Email)}
                />

          {/* <Icon name="form-textbox-password" size={30} style={Loginstyles.icon}/>  */}
                <TextField
                label={"Password"}
                value={Password}
                onChangeText={(Password)=>setPassword(Password)}
                isPassword={true}
                />

              <TouchableOpacity style={Loginstyles.forgot} 
                                onPress={()=>navigation.navigate("ForgetPassword")
                                }>
                  <Text>
                   Forget Password?
                  </Text>
              </TouchableOpacity>

              <Button navigation={navigation} title="Login" changeScreen={"Home"}/>

          </View>

          <View style={Loginstyles.signup}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity 
                onPress={()=>{
                  navigation.navigate('SignUp');
                }}>
      
              <Text style={{fontFamily:'Poppins-bold'}}>Sign Up</Text>
          </TouchableOpacity>
          </View>     
     </View>
     
    )
}






  