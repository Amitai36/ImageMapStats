import NavBar from "./components/layout/NavBar";
import ProviderTheme from "./styles/CreateTheme";

function App() {
  return (
    <ProviderTheme>
      <NavBar />
      <div>hi</div>
    </ProviderTheme>
  );
}

export default App;
