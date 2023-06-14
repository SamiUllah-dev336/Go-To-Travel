import { View,Text,TouchableOpacity,StyleSheet } from "react-native";

export default function Button({navigation,title,changeScreen}){
  return(
    <View>
    <TouchableOpacity style={ButtonStyle.outerV}
                        onPress={()=>{
                          navigation.navigate(changeScreen);
                        }}>
 
         <Text style={ButtonStyle.text}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

const ButtonStyle=StyleSheet.create({
      outerV:{
        borderWidth:1,
        borderRadius:50,
        height:55,
        width:300,
        alignItems:"center",
        justifyContent:"center",
        borderColor:"white",
        backgroundColor:"#000000",
        marginBottom:10
        },
      text:{
        fontSize:20,
        fontFamily:'Poppins-regular',
        color:'white'
        }
})