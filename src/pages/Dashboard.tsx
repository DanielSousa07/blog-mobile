import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/AuthContext";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
    const {logout, user} = useAuth()
    return ( 
         <View style={styles.container}>
            <Text>
             {`Olá, ${user?.username}. Seja bem vindo!`}
             </Text>
             <TouchableOpacity>
                <Text onPress={logout}>Sair</Text>
             </TouchableOpacity>
            

         </View>
     );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', //centralzia na vertical
    },
})

export default Dashboard;