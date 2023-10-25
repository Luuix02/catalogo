import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from "../../Context"

const Navbar = () => {

const context = useContext(CartContext)
    
    const activeStyle = ' underline underline-offset-4'

    return (

        <nav className="flex justify-between  items-center fixed mb-5 z-10  w-full py-5 px-8 text-2xl bg-cyan-950 text-white top-0">
            <ul className="flex items-center gap-3   ">
                <li className="font-semibold gap-3 ">
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Catalogo
                    </NavLink>
                </li>

                <li>
                    <NavLink to='/'
                        className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Inicio
                    </NavLink>
                </li>
                <NavLink to='/contacto'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    Contacto
                </NavLink>
                <li>
                    
                    <NavLink to='/*'
                    className={({ isActive }) => isActive ? activeStyle : undefined}>
                    NotFound
                </NavLink>  
                    </li>
                    <li>
                        {context.count}
                    </li>

            </ul>

        </nav>
    )

}

export default Navbar
