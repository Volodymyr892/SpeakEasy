import { NavLink } from "react-router-dom";
import login from "../../assets/log-in.svg"
import css from "./AuthNav.module.css"

export default function AuthNav(){
    return(
        <nav className={css.nav}> 
            <NavLink to="/login">
            <button className={css.buttonLog}>
                <div className={css.login}>
                    <img src={login} alt="login" />
                    <p className={css.loginP}>Log in</p>
                </div>
            </button>
            </NavLink>
            <NavLink to="/registration">
            <button className={css.buttonReg}>Registration</button>
            </NavLink>
        </nav>
    )
}