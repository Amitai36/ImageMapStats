import { useMutation } from "react-query";
import { addUser } from "./fetch";
import { UserDetails } from "./types";

export const useAddUser = () => {
  return useMutation({
    mutationFn: (variables: UserDetails) => {
      return addUser({
        name: variables.name,
        password: variables.password,
        email: variables.email,
      });
    },
    mutationKey: ["user"],
  });
};
