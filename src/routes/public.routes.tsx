import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { StatusBar } from "expo-status-bar";
const PublicRoutes = () => {
    const {Navigator, Screen} = createNativeStackNavigator();
    return ( 
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login}/>
            <Screen name="register" component={Register}/>
        </Navigator>
     );
}

export default PublicRoutes;
