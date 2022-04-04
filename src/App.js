import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import HoaForm from "./Pages/Forms/HoaForm/HoaForm";
import CityCorpForm from "./Pages/Forms/CityCorpForm/CityCorpForm";
import PropertyForm from "./Pages/Forms/PropertyForm/PropertyForm";
import Log from "./Pages/ViewData/Log/Log";
import CityView from "./Pages/ViewData/Log/CityView/CityView";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/hoaform" element={<HoaForm />} />
          <Route path="/citycorpform" element={<CityCorpForm />} />
          <Route path="/propertyform" element={<PropertyForm />} />
          <Route path="/log" element={<Log />} />
          <Route path="/viewCityCorp" element={<CityView />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
