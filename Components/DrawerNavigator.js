import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer=createDrawerNavigator();

// screens
import ProfileScreen from "../DrawerScreens/Profile";
import TicketChangeScreen from "../DrawerScreens/TicketChange";
import HomeScreen from "../DrawerScreens/Home";

import CustomDrawer from "./CustomDrawer";

export const DrawerNavigator=()=>{
    return(
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props)=> <CustomDrawer {...props}/>}>
    
    <Drawer.Screen name="Home" component={HomeScreen}/>
    <Drawer.Screen name="Profile" component={ProfileScreen}/>
    <Drawer.Screen name="TicketChange" component={TicketChangeScreen}/>

    </Drawer.Navigator>

    )
}