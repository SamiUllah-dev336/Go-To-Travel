import {TouchableOpacity,View ,Text,ScrollView,Alert} from "react-native";
import { useState } from "react";

// componenta
import { TextField} from "../Components/TextField";
import Header from "../Components/Header";
import Button from "../Components/Button";
import { PasswordField } from "../Components/PasswordField";
// style
import { SignUpstyles } from "../StylesSheet/ScreenStyle";
// for firebase
import {createUserWithEmailAndPassword,sendEmailVerification} from "firebase/auth";
import {auth,db} from "../firebase";
import { addDoc ,collection} from "firebase/firestore";



export default function SignUpScreen({navigation}){
  const [Name,setName]=useState('');
  const [Phone,setPhone]=useState('');
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');
  const [ConfirmPassword,setConfirmPassword]=useState('');
       
      //  global.deep=Linking.createURL("myapp://Login");
       
      
       // for phone number
        const handleTextChange = (newText) => {
          // Remove any non-numeric characters from the input 
          const numericValue = newText.replace(/[^0-9]/g, '');
          setPhone(numericValue.slice(0,11));
        };
        const handleTextChange1 = (newText) => {
          // Remove any numeric from the input
          const numericValue = newText.replace(/[^A-Z-' ']/g, '');
          setName(numericValue);
        };

        const disab=()=>{
          return (!Name || !ConfirmPassword || !Password || !Phone || !ConfirmPassword);
        }

       //it is for authentication....
       const handleSignup = async () => {
              if(disab()){
                  Alert.alert("Fields are empty");
                  return;
              }
              else if(Phone.length<11){
                Alert.alert("Number Length must be 11");
                return;
              }
              else if(Password!=ConfirmPassword ){
                Alert.alert("Password and confirm password are not match");
                return;
              }
             else{
            try{
            const usercredntial=await createUserWithEmailAndPassword(auth, Email,Password)
                  const user=usercredntial.user;

             await sendEmailVerification(user)
             
              
          
              // after signup user will move toward next screen
                addDoc(collection(db,'user'),{
                  uid:user.uid,
                  name:Name,
                  email:Email,
                  password:Password,
                  phone:Phone
                })     
                
                Alert.alert('Email verification link is send,check your email');

                navigation.navigate('Login');

                 
            
            }catch(error) {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log('Error Code == ',errorCode);
              console.log('Error Message == ',errorMessage);
              Alert.alert(errorCode,errorMessage);
              
             }

           }
            
          };

        
  
  return(
   
    <View style={SignUpstyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={{  flex:0.1 }}>
        <Header head='Sign Up' navigation={navigation}/> 
      </View>
    
      <View style={SignUpstyles.outerV_F}>
        <Text style={SignUpstyles.textHeader}>Email</Text> 
      
        <TextField
        label={"e.g.sami686@gmail.com"}
        value={Email}
        onChangeText={(Email)=>setEmail(Email)}
        />

        <Text style={SignUpstyles.textHeader}>Name</Text>
      
        <TextField
        label={"e.g.SAMI ULLAH"}
        value={Name}
        onChangeText={handleTextChange1}
        />

      
        <Text style={SignUpstyles.textHeader}>Phone</Text>
      
        <TextField
        label={"e.g.03089789783"}
        value={Phone}
        onChangeText={handleTextChange}
        keybtype={"number-pad"}
        />
        
        <Text style={SignUpstyles.textHeader}>Password</Text>
      
        <PasswordField
        label={"Password"}
        value={Password}
        onChangeText={(Password)=>setPassword(Password)}
        />
    
        <Text style={SignUpstyles.textHeader}>Confirm Password</Text>
      
        <PasswordField
        label={"Confirm Password"}
        value={ConfirmPassword}
        onChangeText={(ConfirmPassword)=>setConfirmPassword(ConfirmPassword)}
        />
        
        <Button title={"SignUp"} handle={handleSignup}/>
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


