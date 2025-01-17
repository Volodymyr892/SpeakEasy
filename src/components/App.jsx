import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy, useEffect } from "react";
import PrivateRoute from "./PrivateRoute";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import { useDispatch } from "react-redux";
import { refreshUser } from "../redux/auth/operations";

const TeachersPage = lazy(()=> import('../pages/TeachersPage/TeachersPage') ) 
const HomePage = lazy(()=> import('../pages/HomePage/HomePage'))



export default function App() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
  if(token){ dispatch(refreshUser({ token, email, name }));}
  },[dispatch])

  const background = location.state && location.state.background;
  return (
    <Layout>
      <Routes location={background || location}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teachers" element={<TeachersPage/>}/>
        <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage/>} redirectTo={"/favorites"}/>}/>
        </Routes>
        {background && (
          <Routes>
            <Route path="/registration" element={<RegisterForm/>}/>
            <Route path="/login" element={<LoginForm/>}/>
          </Routes>
        )}
    </Layout>
  )
}

