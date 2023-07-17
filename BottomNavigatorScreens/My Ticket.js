import {View,Text} from "react-native";
import { BtmHomeStyle } from "../StylesSheet/ScreenStyle";
import { useEffect, useState } from "react";


export default function MyTicketScreen(){

    return(
        <View style={BtmHomeStyle.container}>
            <Text>My Ticket Screen</Text>
        </View>
    )
}