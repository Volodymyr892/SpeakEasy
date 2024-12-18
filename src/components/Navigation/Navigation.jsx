import { NavLink } from "react-router-dom";
import css from './Navigation.module.css'
import logo from "../../assets/Logo.svg"
import { useSelector } from "react-redux";
import { selectIsloggedIn } from "../../redux/auth/selectors";

const makeNavLinkClass = ({isActive})=>`${css.home} ${isActive? css.active:''}`.trim();

export default function Navigation() {
    const isLoggedIn  = useSelector(selectIsloggedIn)
    return(
        <nav> 
               <div className={css.nav}>
                   <img src={logo} alt="logo"/>
                   <div className={css.navigation}>
                        <NavLink className={makeNavLinkClass} to="/">Home</NavLink>
                        <NavLink className={makeNavLinkClass} to="/teachers">Teachers</NavLink>
                        {isLoggedIn && <NavLink className={makeNavLinkClass} to="/favorites">Favorites</NavLink>}
                   </div>
               </div>
        </nav>
    )
    
}