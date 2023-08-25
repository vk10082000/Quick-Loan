import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Application from "./Application";

import { Admin } from "./Admin";

import Bank from "./Bank";



export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/banks" element={<Products/>} />
        <Route path="/verification" element={<Application/>} />

        <Route path="/admin" element={<Admin/>} />

        <Route path="/bank/:bankname/:id" element={<Bank/>} />

     </Routes>
  );
};
