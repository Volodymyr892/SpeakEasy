import { Route, Routes } from "react-router-dom";
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

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/teachers" element={<TeachersPage/>}/>
        <Route path="/favorites" element={<PrivateRoute component={<FavoritesPage/>} redirectTo={"/login"}/>}/>
        <Route path="/registration" element={<RestrictedRoute component={<RegisterForm/>} redirectTo={"/favorites"}/>}/>
        <Route path="/login" element={<RestrictedRoute component={<LoginForm/> } redirectTo={"/favorites"}/>}/>
      </Routes>
    </Layout>
  )
}

