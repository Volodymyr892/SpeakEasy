import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUserName } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations";
export default function UserMenu() {
  const dispstch = useDispatch();
  const user = useSelector(selectUserName)
  console.log("🚀 ~ UserMenu ~ user:", user)
  return (
    <div className={css.nav}>
      <p className={css.name}>{user}</p>
      <button className={css.button} type="button" onClick={()=>{dispstch(logout())}} >Logout</button>
    </div>
  )
}

