import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("Error at AuthProvider")
    }
    else {
        return context
    }
};
 
