import { AdminFeature } from "../../Features/Admin"
import { AdminProvider } from "../../Features/Admin/provider"

export const ADMIN_ROUTE = () => {
    return <AdminProvider>
        <AdminFeature />
    </AdminProvider>
}