import {View,Text,FlatList,Image} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import React,{ useEffect } from "react";
import { GlobalContext } from "../StateManagement/GlobalProvider";
import { TimeSlectionStyle } from "../StylesSheet/ScreenStyle";
import Header from "../Components/Header";
import ButtonSmall from "../Components/ButtonSmall";

import { db } from "../firebase";
import { ref } from "firebase/database";
import {
    collection,
    onSnapshot,
    query,
    updateDoc,
    doc
  } from "firebase/firestore";


export default function TimeSelectionScreen({navigation}){

  const { globalState } = React.useContext(GlobalContext);
  const { globalState1 } = React.useContext(GlobalContext);
 
  const collecArray=(collec)=>{
    const snapshot = collection(db, collec);   // or getFirestore() replace by db
    //console.log(ref);
    const arr=new Array;
    const q = query(snapshot,ref)           // it can work without ref
    onSnapshot(q, snapshot=>{
      
      snapshot.docs.forEach(doc=>{
        // for buses flatlist
        arr.push(doc.data());
      })

    })
    return arr;
  }

  // for updating origin and destination
  const updateOrigin=(collec)=>{
   const snapshot=collection(db,collec);
   const q=query(snapshot,ref);

    onSnapshot(q,(snapshot)=>{
      snapshot.docs.forEach((documentSnapshot) => {
        const documentRef = doc(db, `${collec}/${documentSnapshot.id}`);
        updateDoc(documentRef, {
          origin:globalState.city,
          destination:globalState1.city1
        });

      });
  })
  }

  useEffect(()=>{
    updateOrigin("BusTime");
  })

    // #fdf5e6  => color for seats
  return(
      <View style={TimeSlectionStyle.container}>
        <View style={{flex:0.1}}>
          <Header head="Select Time" navigation={navigation} />
        </View>
        <View style={TimeSlectionStyle.outerFlat}>
        <FlatList
        data={collecArray("BusTime")}
        keyExtractor={item=>item.key}
        horizontal={false}
        renderItem={({item})=>(
           <View style={TimeSlectionStyle.Main}>
              <View style={{flex:0.6,marginBottom:10}}>
              <Image source={{uri:item.image}} style={{width:300,height:200}} />
              </View>

              <View style={TimeSlectionStyle.Bottom}>   
                <View>
                   <Text style={{fontFamily:'Poppins-bold',textAlign:'center'}}>
                    {item.title}
                    </Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:0.45}}>
                      <Text style={{fontFamily:'Poppins-bold'}}>
                        {item.origin}
                      </Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Icon name="arrow-right" size={20} />
                    </View>
                    <View style={{flex:0.45}}>
                      <Text style={{fontFamily:'Poppins-bold',textAlign:'right'}}>
                        {item.destination}
                      </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flex:0.45}}>
                      <Text style={{fontFamily:'Poppins-bold'}}>
                        Time
                      </Text>
                    </View>
                    <View style={{flex:0.1}}>
                        <Icon name="arrow-right" size={20} />
                    </View>
                    <View style={{flex:0.45}}>
                      <Text style={{fontFamily:'Poppins-bold',textAlign:'right'}}>
                        {item.time}
                      </Text>
                    </View>
                </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                      <View style={{marginRight:10}}>
                        <Text style={{fontFamily:'Poppins-bold'}}>
                          Availble Seats:
                        </Text>
                      </View>
                      <View>
                        <Text style={{fontFamily:'Poppins-bold'}}>
                          {item.seats}
                        </Text>
                      </View>
                    </View>

                    <View>
                       <ButtonSmall head="Book Now" navigation={navigation} ChangeScreen={"ReserveSeat"}/>
                    </View>
                </View>
                
              </View>

           </View>
        )
        } 
        />
        </View>
      </View>

    )
}