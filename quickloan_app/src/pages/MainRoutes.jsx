import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Application from "./Application";
import  Login  from "./Login";
import { SignUp } from "./SignUp";


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/verification" element={<Application/>} />
     </Routes>
  );
};
