import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Entypo";

const Bottom=createBottomTabNavigator();
// screens
import LocationScreen from "../BottomNavigatorScreens/Location";
import HelpScreen from "../BottomNavigatorScreens/Help";
import WalletScreen from "../BottomNavigatorScreens/wallet";
import MyTicketScreen from "../BottomNavigatorScreens/My Ticket";
import BottomHomeScreen from "../BottomNavigatorScreens/BottomHome";

export const BottomNavigator=()=>{
    return(
    <Bottom.Navigator>
    
    <Bottom.Screen 
      name="BottomHome" 
      component={BottomHomeScreen}
      options={{headerShown:false,
                tabBarIcon: (tabinfo) => {
                         return(     
                         <Icon name="home" size={25} />  
                          );
                                  }
               }}        
     /> 

    <Bottom.Screen 
      name="My Ticket" 
      component={MyTicketScreen} 
      options={{headerShown:false,
                tabBarIcon: (tabinfo) => {
                         return(     
                         <Icon name="ticket" size={25}/>  
                          );
                                  }
             }}        
     /> 
     <Bottom.Screen 
      name="wallet" 
      component={WalletScreen}   
      options={{headerShown:false,
                tabBarIcon: () => {
                         return(
                         <Icon name="wallet" size={25}/>  
                          );
                                  }
             }}        
     />
     
     <Bottom.Screen 
      name="Location" 
      component={LocationScreen} 
      options={{headerShown:false,
                tabBarIcon: () => {
                        return(
                        <Icon name="location-pin" size={25}/>  
                        );
                  }
               }}
     />           


      <Bottom.Screen 
      name="Help" 
      component={HelpScreen}   
      options={{headerShown:false,
                tabBarIcon: () => {
                         return(
                         <Icon name="help" size={25}/>  
                          );
                                  }
             }}        
     />  
    
    </Bottom.Navigator>

    )
}