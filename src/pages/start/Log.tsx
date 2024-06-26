import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useUser } from "../../store/User";
import Home from "../home";

function Log() {
  const { user } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user.id) {
      navigate("/home");
    }
  }, []);

  return (
    <div style={{ height: "90%" }}>
      <div style={{ height: "80%" }}>
        <Home />
      </div>
    </div>
  );
}

export default Log;
