
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsloggedIn } from "../redux/auth/selectors";

export default function PrivateRoute({component, redirectTo}) {
    const isLoggedIn = useSelector(selectIsloggedIn)

    return isLoggedIn ? component : <Navigate to={redirectTo}/>
}