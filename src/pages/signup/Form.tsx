import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction, useState } from "react";
import { dir } from "i18next";

import { useAddUser } from "../../api/users/query";
import { useUser } from "../../store/User";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface SignInForm {
  name: string;
  password: string;
  email: string;
}

interface FormProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

function Form(props: FormProps) {
  const { setOpen } = props;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const addingUser = useAddUser();
  const { setUser } = useUser();
  const [showPassword, setShowpassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInForm>();

  const onSubmit = (e: SignInForm) => {
    addingUser.mutateAsync(
      { email: e.email, password: e.password, name: e.name },
      {
        onSuccess: (data, v) => {
          setUser(data.user_name, data._id);
          toast.success(`${t("User successfully created")} ${v.name}`);
          navigate("/home");
          setOpen(false);
        },
        onError(error) {
          const err = error as AxiosError;
          toast.error(err.response?.data as string);
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
        Sign up
      </Button>
    </form>
  );
}

export default Form;
