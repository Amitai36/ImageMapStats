import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { dir } from "i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddUser } from "../../api/users/query";

interface SignInForm {
  name: string;
  password: string;
  email: string;
}

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<SignInForm>();
  const useAddUserFunc = useAddUser({
    email: getValues().email,
    name: getValues().name,
    password: getValues().password,
  });
  const [showPassword, setShowpassword] = useState(false);
  const onSubmit = (e: SignInForm) => {
    console.log(e);
    useAddUserFunc.mutate(undefined, {
      onSuccess: () => console.log("success"),
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack justifyContent={"center"} spacing={2} alignItems={"center"}>
        <TextField
          sx={{ width: "80%" }}
          {...register("name", { required: true })}
          error={!!errors.name}
          label={"name"}
        />
        <TextField
          sx={{ width: "80%" }}
          {...register("email", { required: true })}
          type="email"
          error={!!errors.email}
          label={"email"}
        />
        <TextField
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
          {...register("password", { required: true })}
          label={"password"}
          error={!!errors.password}
          type={showPassword ? "text" : "password"}
        />
      </Stack>
      <Button type="submit">hi</Button>
    </form>
  );
}

export default Form;
