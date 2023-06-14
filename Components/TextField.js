import {TextInput,View } from "react-native";

const TextField=({label,isPassword,value,onChangeText,keybtype})=>{
     return(
     <View style={{   
                justifyContent:"center",
                height:50,
                width:300,
                marginBottom:10,
                backgroundColor:"white",
                borderRadius:10,
                shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                 }}>
     <TextInput
     value={value}
     style={{marginLeft:10}}
     placeholder={label}
     onChangeText={onChangeText}
     keyboardType={keybtype}    
     secureTextEntry={isPassword ? true:false}
     />
     </View>
     );
}

export {TextField};

