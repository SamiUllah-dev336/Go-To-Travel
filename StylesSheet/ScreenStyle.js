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
      marginBottom:20,
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

  // export const LogoStyle=StyleSheet.create({
  //   container: {
  //     padding:10,
  //     flex: 1,
  //     alignItems:'center',
  //     backgroundColor:"#E0FFFF",
  //   },
  //   logo:{
  //     height:500,
  //     width:500
  //   }
  // })