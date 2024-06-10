import NavBar from "../../components/layout/NavBar";
import Home from "../home";

function Log() {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "20%" }}>
        <NavBar />
      </div>
      <div style={{ height: "80%" }}>
        <Home />
      </div>
    </div>
  );
}

export default Log;
