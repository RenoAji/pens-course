import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import Jurusan from "./pages/Jurusan";
import Sign from "./pages/Sign";
import Hero from "./components/Hero";
import HeroSecond from "./components/HeroSecond";
import DetailMatkul from "./pages/DetailMatkul";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DashboardMatkul from "./pages/DashboardMatkul";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout Page={Homepage} Hero={<Hero />} />} />
      <Route path="/login" element={<Sign action="Login" />} />
      <Route path="/Register" element={<Sign action="Register" />} />

      <Route path="/jurusan">
        <Route
          index
          element={
            <Layout Page={Jurusan} Hero={<HeroSecond heading="Jurusan" />} />
          }
        />
        <Route
          path=":param"
          element={<Layout Page={Detail} Hero={<HeroSecond />} />}
        />
      </Route>
      <Route
        path="/matkul/:param"
        element={<Layout Page={DetailMatkul} Hero={<HeroSecond />} />}
      />
      <Route path="/dashboard" element={<Layout Page={Dashboard} />}>
        <Route index element={<Profile />} />
        <Route path="matkul" element={<DashboardMatkul />} />
      </Route>
    </Routes>
  );
}

export default App;
