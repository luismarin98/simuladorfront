import { DashboardFeature } from "../../Features/Dashboard"
import { DashboardProvider } from "../../Features/Dashboard/provider"

export const DASHBOARD_ROUTE = () => {
    return <DashboardProvider>
        <DashboardFeature />
    </DashboardProvider>
}