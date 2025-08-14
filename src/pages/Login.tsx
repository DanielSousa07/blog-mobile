import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import Input from "../components/Input";

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(username, password);
    } catch (err){
      console.log("Erro ao logar: ", err)
    }
  };


  return (
    <View style={styles.container}>
      <Image source={{uri:"https://images.vexels.com/media/users/3/327444/isolated/lists/c62b9d704588411409fbed0bc17c75a1-logotipo-roxo-com-uma-montanha-e-uma-arvore.png"}} style={styles.logo}></Image>
      
      <Input 
        icon='mail'
        placeHolder='E-mail'
        value={username}
        onChangeText={setUsername}
      />
      <Input 
        icon='lock'
        placeHolder='Senha'
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, //ocupa todo espaço disponível
    justifyContent: 'center', //alinha verticalmente
    alignItems: "center", // Alinha horizoltamente
    backgroundColor: "#1C1C2E",
    padding: 24, //espaçamento
    gap: 16, 
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 25,
  },
  button: {
    backgroundColor: '#9FF9CC',
    width: 320,
    height: 60,
    padding: 16,
    borderRadius: 18, 
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '1E1E2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;