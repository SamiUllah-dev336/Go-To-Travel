import Icon from 'react-native-vector-icons/Entypo';
import {Text,View} from "react-native";

const HomeHeader=({head,navigation})=>{
  
    return(
    <View style={{
                 flexDirection:'row',
                 width:300,
                 justifyContent:'space-between'
                 }}>
    <View style={{flex:0.25}}>              
    <Icon name={"menu"} size={30} 
            style={{
                fontWeight:'bold'
                }}
            onPress={()=>{     
                navigation.openDrawer();   
              }}
    />
    </View>

    <View style={{flex:0.75}}>
    
    <Text style={{
                fontSize:23,
                fontFamily:"Poppins-bold"
                }}>
     {head}</Text>
     </View>
   </View>
  )
};
export default HomeHeader;
