import { createDrawerNavigator } from "@react-navigation/drawer"
const Drawer=createDrawerNavigator();



// screens
import ProfileScreen from "../DrawerScreens/Profile";
import TicketChangeScreen from "../DrawerScreens/TicketChange";


export const DrawerNavigator=()=>{
    return(
    <Drawer.Navigator>
        
    <Drawer.Screen name="Profile" component={ProfileScreen} options={{headerShown:true}}/>
    <Drawer.Screen name="TicketChange" component={TicketChangeScreen} options={{headerShown:true}}/>
    
    </Drawer.Navigator>

    )
}