import { ClientFeature } from "../../Features/Client"
import { ClientProvider } from "../../Features/Client/provider"

export const ClientRoute = () => {
    return <ClientProvider>
        <ClientFeature />
    </ClientProvider>
}