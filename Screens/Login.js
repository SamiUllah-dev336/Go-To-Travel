import { useState } from "react";
import { View,Text,Image,TouchableOpacity,ScrollView ,Alert} from "react-native";
// components
import { TextField } from "../Components/TextField";
import Button from "../Components/Button";
// styles
import { Loginstyles } from "../StylesSheet/ScreenStyle";
// for firebase
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import { PasswordField } from "../Components/PasswordField";



export default function LoginScreen({navigation}){
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    
    const handleLogin = async () => {
     await signInWithEmailAndPassword(auth, Email, Password)
       .then((userCredential) => {
         // Signed in
         const user = userCredential.user;
         global.user=Email;
         
         navigation.navigate("HomeDrawer");
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         let start="(";
         Alert.alert(start.concat(errorMessage.slice(22)));

       });
   };

    return(
        <View style={Loginstyles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ flex:0.3}}>
            <Image
            style={Loginstyles.logo}
            source={require('../assets/Logo.png')}
            />
          </View>

          <View style={{flex:0.05,alignItems:"center"}}>
              <Text style={{fontFamily:'Poppins-bold',
                            fontSize:20
                            }}>
              Login
              </Text>
          </View>
        
          <View style={Loginstyles.EM_PS_login}>
          
                <TextField
                label={"Email"}
                value={Email}
                onChangeText={(Email)=>setEmail(Email)}
                />

          
                <PasswordField
                label={"Password"}
                value={Password}
                onChangeText={(Password)=>setPassword(Password)}
                />

              <TouchableOpacity style={Loginstyles.forgot} 
                                onPress={()=>navigation.navigate("ForgetPassword")
                                }>
                  <Text>
                   Forget Password?
                  </Text>
              </TouchableOpacity>

              <Button title="Login" changeScreen={"HomeDrawer"} handle={handleLogin}/>

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
          </ScrollView>
        </View>
     
    )
}






  