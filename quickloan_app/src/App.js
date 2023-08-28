import logo from './logo.svg';
import './App.css';

import Application from './pages/Application';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { MainRoutes } from './AllRoutes/MainRoutes';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
