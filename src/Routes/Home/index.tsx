import { useEffect } from "react"

export const HOME_ROUTE = () => {
    useEffect(() => { document.title = 'Simulador Complexivo' }, [])
    return <div className="w-full h-full flex items-center justify-center">Home</div>
}