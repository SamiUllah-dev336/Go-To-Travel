import {View,Text,Image,TouchableOpacity} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState,useEffect } from "react";
import { BtmHomeStyle, ProfileStyle } from "../StylesSheet/ScreenStyle";
import CustomText from "../Components/CustomText";
// database...
import { db } from "../firebase";
import { ref } from "firebase/database";
import {
    collection,
    onSnapshot,
    query,
    updateDoc,
    where,
    doc
} from "firebase/firestore";


export default function ProfileScreen(){
    const [image, setImage] = useState(null);
    const [Name,setName]=useState('');
    const [Phone,setPhone]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');

    console.log("start of function");

    const userData = (collec) => {
      console.log("In user data function!");
      const snapshot = collection(db, collec);
      const q = query(snapshot, ref);
    
      onSnapshot(q, (snapshot) => {
        snapshot.docs.forEach((doc) => {
          if (doc.data().email === global.user) {
            setName(doc.data().name);
            setEmail(doc.data().email);
            setPhone(doc.data().phone);
            setPassword(doc.data().password);
            setImage(doc.data().image);
            console.log(doc.data().image);
          }
        });
      });
    };
    

    


    useEffect(() => {
      (async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access camera roll is required!');
        }
      })();
      console.log("user data is here!");
      userData('user');
      
    }, []);
  
    const pickImage = async () => {
      console.log("pick image function!");
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
    
      if (!result.canceled) {
        const { assets } = result;
        if (assets.length > 0) {
          const imageUri=assets[0].uri;
    
          // Find the document based on a specific condition (e.g., email)
          try{
          const querySnapshot = collection(db,'user');
          const q=query(querySnapshot,where('email', '==', global.user))
          console.log("The value of query ",q);
         
          if (!q.empty) {
           onSnapshot(q,(snapshot)=>{
              snapshot.docs.forEach((documentSnapshot) => {
                const documentRef = doc(db, 'user', documentSnapshot.id);
                updateDoc(documentRef, {
                  image:imageUri
                });

              });
            })

          }

         }catch (error) {
          console.log("error is that",error);
         }
         
        }
      }
    };
      
    

    
    return(
        <View style={BtmHomeStyle.container}>
         {console.log("I am return function!")}
         <View style={ProfileStyle.imageView}>
         {image && <Image source={{ uri: image }} style={ProfileStyle.image}/>}
         </View>

         <View style={{flex:0.1}}>
           <TouchableOpacity onPress={pickImage} 
                             style={{backgroundColor:'black',borderRadius:7}}>
              <Text style={{fontFamily:'Poppins-medium',
                            color:"white"}}
              >
              Add Image
              </Text>
           </TouchableOpacity>
  
         </View>

         <View style={{flex:0.6}}>
          <CustomText title={Name} />
          <CustomText title={Email} />
          <CustomText title={Phone} />
          <CustomText title={Password} />
          <CustomText title={"Pakistan"} />
         </View>
        </View>
    )
}