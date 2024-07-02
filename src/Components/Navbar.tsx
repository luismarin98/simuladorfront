import { Link } from "react-router-dom";

interface RouteProps {
    name: string;
    path: string;
    style: string;
}

export const Navbar = () => {

    const routes: RouteProps[] = [
        {
            name: 'Inicio',
            path: '/',
            style: 'font-semibold transition ease-in-out duration-100 hover:scale-105 uppercase'
        },
        {
            name: 'login',
            path: '/auth',
            style: 'font-semibold transition ease-in-out duration-100 hover:scale-105 uppercase'
        }
    ]

    return <nav className="w-full p-2">
        <div className="flex flex-row gap-2 justify-between items-center dark:bg-orange-400 bg-neutral-300 bg-opacity-90 rounded-md p-1 dark:text-black">
            <h1 className="text-xl font-semibold"><Link to='/'>Simulador Complexivo</Link></h1>
            <ul className="flex flex-row gap-2">
                {
                    routes.map((data, i) => <Link className={data.style} key={i} to={data.path}>{data.name}</Link>)
                }
            </ul>
        </div>
    </nav>
}