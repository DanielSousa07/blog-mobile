import { NavigationContainer } from "@react-navigation/native";
import ProtectRoutes from "./protect.routes";
import PublicRoutes from "./public.routes";
import {useAuth}from '../hooks/useAuth'
const Routes = () => {
    const {user} = useAuth();
    return (
        <NavigationContainer>
            {user?.id ? <ProtectRoutes/> : <PublicRoutes/>}
        </NavigationContainer>
     );
    }
 
export default Routes;