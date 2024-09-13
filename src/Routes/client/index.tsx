import { ClientFeature } from "../../Features/Client"
import { ClientProvider } from "../../Features/Client/provider"

export const CLIENT_ROUTE = () => {
    return <ClientProvider>
        <ClientFeature />
    </ClientProvider>
}