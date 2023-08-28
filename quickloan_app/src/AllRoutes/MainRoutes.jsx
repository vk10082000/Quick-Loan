import { Route, Routes } from "react-router-dom";
import Products from "../pages/Products";

import Homepage from "../pages/Homepage";
import { Support } from "../components/Support";

import Application from "../pages/Application";
import  Login  from "../pages/Login";
import { SignUp } from "../pages/SignUp";

import { PrivateRoute } from "./PrivateRoute";
import { BankApplication } from "../pages/BankApplication";
import Bank from "../pages/Bank";
import { Admin } from "../pages/Admin";
import { BankApplicationMain } from "../components/BankApplicationMain";
import { Profile } from "../pages/Profile";
import Process from "../pages/Process";



export const MainRoutes = () => {
  return (
    <Routes>

        <Route path='/' element={<Homepage/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        
        <Route path="/banks/:category" element={<Products/>} />

        <Route path="/verification" element={<PrivateRoute>
            <Application/>
          </PrivateRoute>} />

        <Route path="/admin" element={<Admin/>} />

        <Route path="/bank/:bankname/:id" element={<Bank/>} />

        <Route path='/process' element={<Process />} />

        <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
        
        <Route path='/bankApplication/:id' element={<PrivateRoute><BankApplicationMain /></PrivateRoute>} />

     </Routes>
  );
};
