
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import css from "./AppBar.module.css"
import { useSelector } from "react-redux";
import { selectIsloggedIn } from "../../redux/auth/selectors";

export default function AppBar() {
    const isLoggedIn = useSelector(selectIsloggedIn)
    return(
        <header className={css.header}>
            <Navigation/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}