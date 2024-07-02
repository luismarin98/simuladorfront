import { ReactNode, createContext } from "react";

export interface IAuthContext { }

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const storage: IAuthContext = {}

    return <AuthContext.Provider value={storage}>{children}</AuthContext.Provider>
}

export default AuthContext;