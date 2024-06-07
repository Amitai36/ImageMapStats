import { useMutation } from "react-query";
import { addUser } from "./fetch";

export const useAddUser = ({
  name,
  password,
  email,
}: {
  name: string;
  password: string;
  email: string;
}) => {
  return useMutation({
    mutationFn: () => addUser(name, password, email),
  });
};
