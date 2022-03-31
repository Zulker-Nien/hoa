import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import HoaForm from './Pages/Forms/HoaForm/HoaForm';
import CityCorpForm from './Pages/Forms/CityCorpForm/CityCorpForm';
import PropertyForm from './Pages/Forms/PropertyForm/PropertyForm';
import Log from './Pages/ViewData/Log/Log';
import CityView from './Pages/ViewData/Log/CityView/CityView';
const App = ()=> {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/hoaform" element={<HoaForm/>} />
      <Route path="/citycorpform" element={<CityCorpForm/>} />
      <Route path="/propertyform" element={<PropertyForm/>} />
      <Route path="/log" element={<Log/>} />
      <Route path="/viewCityCorp" element={<CityView/>} />
    </Routes>
  );
}

export default App;
