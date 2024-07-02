import { ReactNode, createContext } from "react";

export interface IClientContext { }

const ClientContext = createContext({});

export const ClientProvider = ({ children }: { children: ReactNode }) => {
    const storage: IClientContext = {}

    return <ClientContext.Provider value={storage}>{children}</ClientContext.Provider>
}

export default ClientContext;