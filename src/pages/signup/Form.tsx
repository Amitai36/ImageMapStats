import { Visibility, VisibilityOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { dir } from "i18next";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddUser } from "../../api/users/query";
import { toast } from "react-toastify";

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
  } = useForm<SignInForm>();

  const addingUser = useAddUser();

  const [showPassword, setShowpassword] = useState(false);
  const onSubmit = (e: SignInForm) => {
    addingUser.mutate(
      { email: e.email, password: e.password, name: e.name },
      {
        onSuccess: () => {
          toast.success("הנתונים עלו בהצלחה");
        },
      }
    );
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
      <Button disabled={addingUser.isLoading} type="submit">
        Sign In
      </Button>
    </form>
  );
}

export default Form;
