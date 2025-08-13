import {
  createContext,
  useState,
  useEffect,
  PropsWithChildren,
  Children,
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
    try {
      const response = await api.post("/auth/login", {
        username,
        password,
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
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
