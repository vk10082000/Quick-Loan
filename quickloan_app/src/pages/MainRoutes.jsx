import { Route, Routes } from "react-router-dom";
import Products from "./Products";


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/products" element={<Products/>} />
     </Routes>
  );
};
