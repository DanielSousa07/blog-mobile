import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from '../pages/Dashboard';

const ProtectRoutes = () => {
    const {Navigator, Screen} = createNativeStackNavigator();
    return ( 
        <Navigator>
            <Screen name="dashboard" component={Dashboard}/>
            
        </Navigator>
     );
}

export default ProtectRoutes