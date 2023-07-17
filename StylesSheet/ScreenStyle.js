import {StyleSheet} from "react-native"
import { widthPercentageToDP as wp,heightPercentageToDP as hp} from "react-native-responsive-screen";


export const SignUpstyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E0FFFF",
      alignItems:'center',
      padding:10
    },
    button:{
      borderWidth:1,
      borderRadius:10,
      height:55,
      width:300,
      alignItems:"center",
      justifyContent:"center",
      borderColor:"white",
      marginBottom:10,
     },
     
    textHeader:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:10,
      alignSelf:'flex-start',
    },
    outerV_F:{
      flex:0.7,
      alignItems:'center',
    },
    signIn:{
      flex:0.1,
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"center",
      }
  });

  export const Loginstyles = StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },

    logo:{
      height:hp('45%'),
      width:wp('45%'),
      alignSelf:'center'
    },
   
    EM_PS_login:{
      flex:0.5,
      alignSelf:'center',
    },
    headr:{
      fontWeight:"bold",
      fontSize:30
    },
    outerView:{
       flexDirection:"row",
       backgroundColor:"white",
       marginBottom:10
    },
    
    icon:{
      marginTop:10,
      marginLeft:10
    },
    forgot:{
      marginBottom:10,
      alignItems:'flex-end'
    },

    signup:{
      flex:0.1,
      flexDirection:'row',
      alignSelf:'center'
    }
 
  });

  export const ForgetStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },
    Email_Pass:{
      flex:0.3
    },
    textHeader:{
      fontSize:15,
      fontWeight:"bold",
      marginBottom:10,
      alignSelf:'flex-start',
      marginLeft:5
    },
  })

  export const NewPassStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },
    Email_Pass:{
      flex:0.4
    },
  })

  export const BtmHomeStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },
    textStyle:{
      textAlign:'center',
      fontFamily:'Poppins-exbold',
      fontSize:20
    },
    textHeader:{
      fontSize:15,
      fontFamily:"Poppins-exbold",
      alignSelf:'flex-start',
    },
    calendar:{
      flexDirection:"row",
      borderBottomWidth:1,
      justifyContent:'space-between',
      height:40,
      marginBottom:20,
      backgroundColor:"white"
    }
    
  })

  export const HelpStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      justifyContent:'center',
      backgroundColor:"#E0FFFF",
    },
    innerContainer:{
      flex:0.7,
      alignItems:"center"
    },
    textStyle:{
      fontFamily:'Poppins-bold',
      fontSize:20
    },
    comments:{
      fontFamily:"Poppins-medium",
      flex:0.2,
      alignItems:'center',
      justifyContent:'center',
      width:250
    }

  })

  export const TimeSlectionStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },
    outerFlat:{
      marginTop:10,
      flex:0.9
    },
    // flatlist
    Main:{
      flex:1,
      width:300,
      height:300,
      borderRadius:20,
      backgroundColor:'white',
      marginBottom:10
    },
    Bottom:{
      flex:0.4,
      padding:10,
      backgroundColor:'#fdf5e6'
    }
    
  })

  export const ReserveSeatStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      justifyContent:'center',
      backgroundColor:"#E0FFFF",
    }
  })

  export const ProfileStyle=StyleSheet.create({
    container: {
      padding:10,
      flex: 1,
      alignItems:'center',
      backgroundColor:"#E0FFFF",
    },
    imageView:{
      marginBottom:20,
      flex:0.3,
      height:200,
      width:200,
      borderWidth:1,
      backgroundColor:'#f5fffa',
      borderRadius:30
    },
    image:{ 
      width: 200, 
      height: 200,
      borderRadius:30
    }
  })

export const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#E0FFFF'
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 1,
      padding: 35,
      alignItems: 'center',
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