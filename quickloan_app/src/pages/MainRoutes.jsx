import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Application from "./Application";


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/verification" element={<Application/>} />
     </Routes>
  );
};
