import { Route, Routes } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./pages/home";
import ProviderTheme from "./styles/CreateTheme";

function App() {
  return (
    <ProviderTheme>
      <NavBar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </ProviderTheme>
  );
}

export default App;
