import {
  createContext,
  useState,
  PropsWithChildren,
} from "react";
import { api } from "../services/api";
import { Alert } from "react-native";

type User = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
};
type AuthContextProps = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);

  async function login(username: string, password: string) {
    console.log("Tentando logar com:", { username, password });
    
    try {
      // Cria o objeto do corpo da requisição.
      const requestBody = { username, password };
      
      const response = await fetch(`${api.defaults.baseURL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Resposta da API recebida. Status:", response.status);

      if (!response.ok) {
        // Tenta ler o corpo do erro para ter mais detalhes, se disponível.
        const errorData = await response.json().catch(() => ({}));
        console.log("Erro na requisição. Detalhes:", errorData);
        throw new Error("usuário ou senha inválidos");
      }

      const data: User = await response.json();
      console.log("Login bem-sucedido. Dados do usuário:", data);

      setUser(data);
    } catch (error) {
      console.log("Erro capturado durante o login:", error);
      Alert.alert("Erro", "usuário ou senha inválidos");
    }
  }

  async function logout() {}

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};