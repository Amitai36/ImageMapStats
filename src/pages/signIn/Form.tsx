import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import { dir } from "i18next";

import { useGetUser } from "../../api/users/query";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../store/User";

function Form() {
  const navigate = useNavigate();
  const [showPassword, setShowpassword] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { data, refetch, status } = useGetUser({ name, password });
  const { setUser } = useUser();

  useEffect(() => {
    if (status === "success") {
      setUser(data.user_name, data._id);
      navigate("/home");
    }
  }, [data]);
  return (
    <>
      <Stack justifyContent={"center"} spacing={2} alignItems={"center"}>
        <TextField
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "80%" }}
          label={"name"}
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ width: "80%" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position={dir() === "ltr" ? "start" : "end"}>
                <Button onClick={() => setShowpassword((prev) => !prev)}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </Button>
              </InputAdornment>
            ),
          }}
          label={"password"}
          type={showPassword ? "text" : "password"}
        />
      </Stack>
      <Button onClick={() => refetch()} disabled={false} type="submit">
        Sign In
      </Button>
    </>
  );
}

export default Form;
