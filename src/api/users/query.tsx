import { useMutation, useQuery } from "react-query";
import { addUser, getUser } from "./fetch";
import { UserDetails } from "./types";
import { toast } from "react-toastify";

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

export const useGetUser = ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  return useQuery(["user"], () => getUser({ name, password }), {
    enabled: false,
    onError(err: string) {
      console.log(err);
      toast.error(err);
    },
    onSuccess(data) {
      if (typeof data === "string") {
        toast.warning(data);
      } else {
        toast.success(`ברוך הבא ${data.user_name}`);
      }
    },
  });
};
// export const useResetPassword = () => {
//   return useQuery(["user"], () => resetPassword(), {
//     enabled: false,
//     onError(err: string) {
//       console.log(err);
//       toast.error(err);
//     },
//   });
// };
