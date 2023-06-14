import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Bottom=createBottomTabNavigator();

// screens
import LocationScreen from "../BottomNavigatorScreens/Location";
import HelpScreen from "../BottomNavigatorScreens/Help";

export const BottomNavigator=()=>{
    return(
    <Bottom.Navigator>
        
    <Bottom.Screen name="Location" component={LocationScreen} />
    <Bottom.Screen name="Help" component={HelpScreen} />
                
    
    </Bottom.Navigator>

    )
}