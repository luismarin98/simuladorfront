import { DashboardFeature } from "../../Features/Dashboard"
import { DashboardProvider } from "../../Features/Dashboard/provider"

export const Dashboard_Route = () => {
    return <DashboardProvider>
        <DashboardFeature />
    </DashboardProvider>
}