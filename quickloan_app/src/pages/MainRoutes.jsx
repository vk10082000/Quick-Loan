import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import Homepage from "./Homepage";
import { Support } from "../components/Support";


export const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/products" element={<Products/>} />
     </Routes>
  );
};
