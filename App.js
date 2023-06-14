import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
//Screens
import LoginScreen from './Screens/Login';
import SignUpScreen from './Screens/SignUp';
import ForgetPasswordScreen from './Screens/ForgetPassword';
import VerificationScreen from './Screens/Verification';
import NewPasswordScreen from './Screens/NewPassword';
import ModalViewScreen from './Screens/ModalV';
import HomeScreen from './Screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-exbold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
  });

  if(!fontsLoaded){
    return undefined;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ForgetPassword" component={ForgetPasswordScreen}/>
        <Stack.Screen name="Verification" component={VerificationScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="ModalV" component={ModalViewScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>

       
      </Stack.Navigator>              
    </NavigationContainer>
  );
}

