import { useState } from "react";
import {TextInput,View ,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const PasswordField=({label,value,onChangeText})=>{
    const [Password,setPassword]=useState(true);
     return(
     <View style={{   
                justifyContent:"center",
                height:50,
                width:300,
                marginBottom:10,
                backgroundColor:"white",
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                borderRadius:10,
                shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                 }}>
        <View style={{marginLeft:10,flex:0.9}}>
            <TextInput
            value={value}
            placeholder={label}
            onChangeText={onChangeText}
            secureTextEntry={Password}
            cursorColor={"#000000"}   
            />
        </View>

        <View style={{marginRight:10,flex:0.1}}>
            <TouchableOpacity onPress={()=>setPassword(!Password)}>
            <Icon name="eye" size={25}/>
            </TouchableOpacity>
        </View>
     </View>
     );
}

export {PasswordField};

