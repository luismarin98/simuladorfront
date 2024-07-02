import { ReactNode, createContext } from "react";

export interface IAdminContext { }

const AdminContext = createContext({});

export const AdminProvider = ({ children }: { children: ReactNode }) => {
    const storage: IAdminContext = {}

    return <AdminContext.Provider value={storage}>{children}</AdminContext.Provider>
}

export default AdminContext;