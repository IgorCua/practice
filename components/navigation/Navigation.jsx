import { NavLink } from "react-router-dom";
import css from './style.module.scss';
import clsx from "clsx";

export const Navigation = () => {
    return <nav className={css.nav}>
        <NavLink 
            to={'/'} 
            className={({isActive}) => clsx(css['nav-link'], isActive && css.active)}
        >Main</NavLink>
        <NavLink 
            to={'/workers'} 
            className={({isActive}) => clsx(css['nav-link'], isActive && css.active)}
        >Workers</NavLink>
    </nav>
    
}