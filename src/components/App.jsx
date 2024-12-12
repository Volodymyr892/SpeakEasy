import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout/Layout";
import { lazy } from "react";
import PrivateRoute from "./PrivateRoute";
import FavoritesPage from "../pages/FavoritesPage/FavoritesPage";
import RestrictedRoute from "./RestrictedRoute";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";

const TeachersPage = lazy(()=> import('../pages/TeachersPage/TeachersPage') ) 
const HomePage = lazy(()=> import('../pages/HomePage/HomePage'))



export default function App() {
  const location = useLocation();

 const background = location.state && location.state.background;
  return (
    <Layout>
      <Routes location={background || location}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teachers" element={<TeachersPage/>}/>
        <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage/>} redirectTo={"/login"}/>}/>
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

