import React, {useState} from 'react';
import { Modal, Text, Pressable, View} from 'react-native';
import { styles } from '../StylesSheet/ScreenStyle';

const PaymentScreen= ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(true);


  return (
    
    <View style={styles.centeredView}>
       {console.log("I am return function")}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Payment is coming soon!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible)
                              navigation.navigate('Login')}}>
              <Text style={styles.textStyle}>Hide</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    
    </View>
    
  );
};



export default PaymentScreen;