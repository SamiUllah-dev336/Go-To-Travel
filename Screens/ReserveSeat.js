import {View,Text} from "react-native";
import SeatsLayout from "@mindinventory/react-native-bus-seat-layout";
import React from "react";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ReserveSeatStyle } from "../StylesSheet/ScreenStyle";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import ButtonSmall from "../Components/ButtonSmall";

export default function ReserveSeatScreen({navigation}){
    const {woman,setWoman}=React.useContext(GlobalContext);
    const {man,setMan}=React.useContext(GlobalContext);
    const array=[
    ]

    global.i=0;

    return(
        <View style={ReserveSeatStyle.container}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             
             <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:10,
                             marginRight:5
                             }}>
                    <Icon name='seat' size={25} color={'#5f9ea0'}/>
                    <Text style={{fontFamily:'Poppins-medium'}}>male</Text>
                </View>

                <View style={{marginRight:5,
                              alignItems:'center'
                              }}>
                    <Icon name='seat' size={25} color={'#E8296A'}/>
                    <Text style={{fontFamily:'Poppins-medium'}}>female</Text>
                </View>
                
                <View style={{alignItems:'center',marginRight:5}}>
                    <Icon name='seat' size={25} color={'green'}/>
                    <Text style={{fontFamily:'Poppins-medium'}}>Reserve</Text>
                </View>

                <View style={{alignItems:'center'}}>
                    <Icon name='seat' size={25} color={'#B2B2B2'}/>
                    <Text style={{fontFamily:'Poppins-medium'}}>Availble</Text>
                </View>
             </View>

             <View style={{justifyContent:"center",marginRight:10}}>
                <ButtonSmall head="Payment" navigation={navigation} ChangeScreen={"Payment"}/>
             </View>

            </View>


            <View style={{flex:0.9}}>
                <SeatsLayout
                row={11}
                layout={{ columnOne: 2, columnTwo: 2 }}
                selectedSeats={array}
                numberTextStyle={{ fontSize: 12,marginBottom:10}}
                seatImage={{ image: require("../assets/seat.png"), tintColor: '#B2B2B2' ,width:50}}
                getBookedSeats={(seats) => {
                
                
                if((global.i)<seats.length){
                    
                    if(man.click){
                    
                    seats[global.i].type='man'
                    seats[global.i].isSeatSeleced=true
                    setMan((prevState) => ({ ...prevState, click: false}))
                    
                    }else if(woman.click){

                    seats[global.i].type='women'
                    seats[global.i].isSeatSeleced=true
                    setWoman((prevState) => ({ ...prevState, click: false}))
                    
                    }
                    (global.i)++;

                }
                console.log('booked seats:',seats);

                }}     
                />
            </View>
         </View>
    )
}