import {View,Text} from "react-native";
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";

import  Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { ReserveSeatStyle } from "../StylesSheet/ScreenStyle";
import { SlideInDown } from "react-native-reanimated";

export default function ReserveSeatScreen({navigation}){
    
    return(
        <View style={ReserveSeatStyle.container}>

            <View style={{marginTop:40,flex:0.9}}>
            <SeatsLayout
            row={11}
            layout={{ columnOne: 2, columnTwo: 2 }}
            selectedSeats={[
                { seatNumber: 1, seatType: 'booked' },
                { seatNumber: 11, seatType: 'women' },
                { seatNumber: 17, seatType: 'women' },
                { seatNumber: 43, seatType: 'blocked' },
            ]}
            numberTextStyle={{ fontSize: 12 }}
            seatImage={{ image: require("../assets/seat.png"), tintColor: '#B2B2B2' ,width:50}}
            getBookedSeats={(seats) => {
                console.log('getBookedSeats :: ', seats);
            }}
            />
            </View>
         </View>
    )
}