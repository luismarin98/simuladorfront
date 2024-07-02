import { AdminFeature } from "../../Features/Admin"
import { AdminProvider } from "../../Features/Admin/provider"

export const AdminRoute = () => {
    return <AdminProvider>
        <AdminFeature />
    </AdminProvider>
}