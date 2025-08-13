import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TouchableOpacity
        onPress={() => login("emilys", "emilyspass")}
      >
        <Text>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", //centralzia na vertical
  },
});

export default Login;