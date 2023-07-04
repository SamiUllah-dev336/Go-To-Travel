import { Text ,View} from "react-native"

export default function CustomText({title}){
    return(
        <View style={{   
            justifyContent:"center",
            height:50,
            width:300,
            marginBottom:10,
            backgroundColor:"white",
            borderRadius:10,
            borderBottomWidth:5,
            shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
             }}>
         <Text style={{marginLeft:10,fontFamily:'Poppins-medium'}}>{title}</Text>       
        
        </View>
 )
}