import { fetchCities } from "../Components/FetchCities";
import React,{ useState } from "react";
import { View,Text,FlatList,TouchableOpacity } from "react-native";
import { GlobalContext } from "../StateManagement/GlobalProvider";

export default function CityFlatlist({navigation,press}){
    const [CityTo,setCityTo]=useState(fetchCities('cities'));
    const {globalState, setGlobalState } = React.useContext(GlobalContext);
    const {globalState1, setGlobalState1}=React.useContext(GlobalContext);

    return(
        <View>
            <FlatList
            data={CityTo}
            keyExtractor={item=>item.key}
            renderItem={({item})=>(
                <View style={{
                            width:300,
                            height:40,
                            borderBottomWidth:1,
                            backgroundColor:'white',
                            flexDirection:'row'
                            }}>
                <TouchableOpacity style={{flex:0.3}} onPress={() => {
                                                                if(press=="CityTo"){
                                                                setGlobalState((prevState) => ({ ...prevState, city: item.city}));
                                                                }else{
                                                                setGlobalState1((prevState) => ({ ...prevState, city1: item.city}));
                                                                }
                                                                navigation.goBack();
                                                                
                                                            }}
                                                            >          
                <Text>{item.city}</Text>
                </TouchableOpacity>   
                </View>
            )
            }
            />
        </View>
    )
}