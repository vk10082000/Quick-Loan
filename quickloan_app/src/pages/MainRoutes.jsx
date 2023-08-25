import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Application from "./Application";
import { Admin } from "./Admin";


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/verification" element={<Application/>} />
        <Route path="/admin" element={<Admin/>} />
     </Routes>
  );
};
