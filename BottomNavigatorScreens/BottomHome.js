import {View,Text, TouchableOpacity, Modal,Animated,Image,Alert} from "react-native";
import { useRef,useEffect,useState } from "react";
import React from "react";
import { BtmHomeStyle } from "../StylesSheet/ScreenStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import {Calendar} from 'react-native-calendars';

// components
import HomeHeader from "../Components/HomeHeader";
import Button from "../Components/Button";
import { ScrollView } from "react-native-gesture-handler";
import { SearchCityField } from "../Components/SearchCity";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import {format} from "date-fns";

export default function BottomHomeScreen({navigation}){
  
  // It will format the date
  const date1= new Date();
  const formattedDate = format(date1, 'yyyy-MM-dd');
  const [date,setDate]=useState(formattedDate);
 
  const [ShowModal,setShowModal]=useState(false);
  
  const { globalState } = React.useContext(GlobalContext);
  const { globalState1 } = React.useContext(GlobalContext);

  // for checking initial state
    if(globalState.city==undefined){
      globalState.city="Enter city";
      globalState1.city1="Enter city";
    }

    const handle=()=>{
      if(globalState.city=="Enter city"){
        Alert.alert("Please select origin");
        return;
      }
      else if(globalState1.city1=="Enter city"){
        Alert.alert("Please select Destination");
        return;
      }
        navigation.navigate("TimeSlection");
    }
   
    const FadeInView = props => {
      const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
    
      useEffect(() => {
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 10000,
          useNativeDriver: true,
        }).start();
      }, [fadeAnim]);
      

    
      return (
        <Animated.View // Special animatable View
          style={{
            ...props.style,
            opacity: fadeAnim, // Bind opacity to animated value
          }}>
          {props.children}
        </Animated.View>
      );
    };
   
    return(
      <View style={BtmHomeStyle.container}>
        <ScrollView>
          {/* {console.log(fetchCities("cities"))} */}
        <View style={{flex:0.1}}>
          <HomeHeader head={"Go-To Travel"} navigation={navigation}/>
        </View>
         
        <View style={{flex:0.2}}>
        <View>
          <FadeInView
            style={{
              width: 300,
              height: 170,
              backgroundColor: 'powderblue',
            }}>
            <Image source={require("../assets/buslogo.jpg")} style={{width:300,height:170}}  />
          </FadeInView>
        </View>
        </View>     
            

        <View style={{flex:0.5}}>
            <View style={{marginBottom:10}}>
            <Text style={BtmHomeStyle.textStyle}>
             Select your route</Text>
            </View>      

            <Text style={BtmHomeStyle.textHeader}>From</Text> 
            <SearchCityField label={globalState.city} navigation={navigation} press={"CityTo"}/>
            <Text style={BtmHomeStyle.textHeader}>To</Text> 
            <SearchCityField label={globalState1.city1} navigation={navigation} press={"CityFrom"}/>
            

            <Text style={BtmHomeStyle.textHeader}>Departure Date</Text> 
            <View style={BtmHomeStyle.calendar}>
                            
               <View style={{marginTop:10,marginLeft:10}}>
                 <Text>{date}</Text>
               </View>
               <View style={{marginRight:10,marginTop:5}}>
                 <TouchableOpacity onPress={()=> setShowModal(true)}>
                 <Icon name={"calendar"} size={25}/>
                 </TouchableOpacity>
               </View>
            </View>
            
            <Button title={"Search"} handle={handle}/>
        </View>
        

        <Modal visible={ShowModal} animationType="slide" statusBarTranslucent={false} transparent={true}
               style={{backgroundColor:"#E0FFFF"}}
         >
          <View style={{flex:1,alignItems:"center",justifyContent:'center'}}>
          <Calendar 
                    onDayPress={date=>{
                    setDate(date.dateString);
                    setShowModal(false);}}
          hideExtraDays={true}
          disableArrowLeft={false}
          disableArrowRight={false}
          />
          </View>
        </Modal>

        </ScrollView>
      </View>  
    )
 
}

