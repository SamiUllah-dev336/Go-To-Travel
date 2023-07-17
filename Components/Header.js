import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,View} from "react-native";

const Header=({head,navigation})=>{
  
    return(
    <View style={{
                 flexDirection:'row',
                 width:300,
                 justifyContent:'space-between'
                 }}>
    <View style={{flex:0.3}}>              
    <Icon name={"angle-left"} size={30} 
            style={{
                fontWeight:'bold'
                }}
            onPress={()=>{     
                navigation.goBack();     //navigation.pop(); is also
              }}
    />
    </View>

    <View style={{flex:0.7}}>
    <Text style={{
                fontSize:23,
                fontFamily:"Poppins-bold"
                }}>
     {head}</Text>
     </View>
   </View>
  )
};
export default Header;
