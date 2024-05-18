import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/layout/NavBar";
import ProviderTheme from "./styles/CreateTheme";
const Home = lazy(() => import("./pages/home"));
const SearchRes = lazy(() => import("./pages/searchRes"));

function App() {
  return (
    <ProviderTheme>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<SearchRes />} />
          <Route path="/map" element={<SearchRes />} />
        </Route>
      </Routes>
    </ProviderTheme>
  );
}

export default App;
