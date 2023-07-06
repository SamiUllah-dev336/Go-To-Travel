import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GlobalContext } from '../StateManagement/GlobalProvider';

const CustomModal= ({type,transparent,close,visible}) => {
  const {man,setMan}=React.useContext(GlobalContext);
  const {woman,setWoman}=React.useContext(GlobalContext);
  
  return (
    
    <View style={styles.centeredView}>
      <Modal
        animationType={type}
        transparent={transparent}
        visible={visible}
        onRequestClose={
          close
        }>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
             <TouchableOpacity style={{marginRight:10}} onPress={()=> {setMan((prevState) => ({ ...prevState, click: true}));
                                                                       close()}}>
               <Icon name='man' size={40} color={'#5f9ea0'}/>
               <Text style={{fontFamily:'Poppins-bold'}}>man</Text>
            </TouchableOpacity>

             <TouchableOpacity onPress={()=> {setWoman((prevState) => ({ ...prevState, click: true}))
                                              close()}}>
               <Icon name='woman' size={40} color={'#E8296A'}/>
               <Text style={{fontFamily:'Poppins-bold'}}>woman</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
    
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute', // Set position to 'absolute'
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 1,
    padding: 35,
    flexDirection:'row',
    alignItems: 'center',
    alignSelf: 'center', // Center the modal within the screen horizontally
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily:"Poppins-medium"
  },
});

export default CustomModal;