import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuid } from "uuid";
import Menu from "./components/Menu";
import "./css/app.css";
import Home from "./pages/Home";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [technos, setTechnos] = useState([]);
  const localTechnos = "technos";
  const [storeValue, setStoreValue] = useLocalStorage(localTechnos, []);

  useEffect(() => {
    setTechnos(storeValue);
  }, []);

  useEffect(() => {
    setStoreValue(technos);
  }, [technos]);

  function handleAddTechno(techno) {
    console.log(techno);
    setTechnos([...technos, { ...techno, technoId: uuid() }]);
  }

  function handleDelete(technoId) {
    setTechnos(technos.filter((techno) => techno.technoId !== technoId));
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechno} />}
        />
        <Route
          path="/list"
          element={<TechnoList technos={technos} handleDelete={handleDelete} />}
        />
      </Routes>
    </>
  );
}

export default App;
