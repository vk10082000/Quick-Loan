import logo from './logo.svg';
import './App.css';

import Application from './pages/Application';
import { MainRoutes } from './pages/MainRoutes';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">

      <Navbar/>


      <Application/>

      <MainRoutes/>

    </div>
  );
}

export default App;
