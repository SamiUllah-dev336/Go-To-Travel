import { TouchableOpacity,Text } from "react-native";

export default function ButtonSmall({head,navigation,ChangeScreen}){
    return(
        <TouchableOpacity style={{backgroundColor:'black',borderRadius:7}} 
                                         onPress={()=>navigation.navigate(ChangeScreen)}
                        >
                          <Text style={{fontFamily:'Poppins-medium',color:"white"}}>
                            {head}
                          </Text>
         </TouchableOpacity>
    )
}