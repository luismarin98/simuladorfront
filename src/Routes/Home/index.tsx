import { useEffect } from "react"

export const Home_Route = () => {
    useEffect(() => { document.title = 'Simulador Complexivo' }, [])
    return <div className="w-full h-full flex items-center justify-center">Home</div>
}