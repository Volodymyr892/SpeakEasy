
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsloggedIn } from "../redux/auth/selectors";

export default function RestrictedRoute({component, redirectTo}) {
    const isLoggedIn = useSelector(selectIsloggedIn)

    return isLoggedIn ? <Navigate to={redirectTo}/>: component;
}