import { useDispatch, useSelector } from "react-redux"
import css from "./UserMenu.module.css"
import { selectUserName } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations";
import { useEffect } from "react";
import { clearFavorites } from "../../redux/favorites/slice";
import {useNavigate } from "react-router-dom";
export default function UserMenu() {
  const dispstch = useDispatch();
  const user = useSelector(selectUserName)
   const navigate = useNavigate()

  const handleClick =  ()=>{
    dispstch(logout());
    dispstch(clearFavorites());
    navigate('/')
  };

  return (
    <div className={css.nav}>
      <p className={css.name}>{user}</p>
      <button className={css.button} type="button" onClick={handleClick} >Logout</button>
    </div>
  )
}

