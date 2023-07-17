import { View, Text, Image, TouchableOpacity } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from "react";
import { BtmHomeStyle, ProfileStyle } from "../StylesSheet/ScreenStyle";
import CustomText from "../Components/CustomText";
// database...
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  updateDoc,
  where,
  doc,
  getDocs
} from "firebase/firestore";

export default function ProfileScreen() {
  const [image, setImage] = useState(null);
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = userData('user');
    return unsubscribe;
  }, []);

  const userData = (collec) => {
    const q = query(collection(db, collec), where('email', '==', global.user));

    return onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        const data = doc.data();
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setPassword(data.password);
        setImage(data.image);
      });
    }, (error) => {
      console.log("Error getting user data:", error);
    });
  };

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera roll is required!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      const {assets}=result;
      const imageUri = assets[0].uri;

      try {
        const q = query(collection(db, 'user'), where('email', '==', global.user));
        const snapshot = await getDocs(q);
        
        const documentRef = doc(db, 'user',snapshot.docs.at(0).id);
        await updateDoc(documentRef, {
          image: imageUri
        });

      } catch (error) {
        console.log("Error updating user image:", error);
      }
    }
  };

  return (
    <View style={BtmHomeStyle.container}>
      <View style={ProfileStyle.imageView}>
        {image && <Image source={{ uri: image }} style={ProfileStyle.image} />}
      </View>

      <View style={{ flex: 0.1 }}>
        <TouchableOpacity onPress={pickImage} style={{ backgroundColor: 'black', borderRadius: 7 }}>
          <Text style={{ fontFamily: 'Poppins-medium', color: "white" }}>
            Add Image
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 0.6 }}>
        <CustomText title={Name} />
        <CustomText title={Email} />
        <CustomText title={Phone} />
        <CustomText title={Password} />
        <CustomText title={"Pakistan"} />
      </View>
    </View>
  );
}
