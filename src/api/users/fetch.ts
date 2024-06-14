import axios from "axios";
import { UserDetailsBack } from "./types";

export const addUser = async ({
  email,
  name,
  password,
}: {
  name: string;
  password: string;
  email: string;
}) => {
  const adding = await axios.post<UserDetailsBack>(
    `http://localhost:3000/user/addUser`,
    null,
    {
      params: {
        name,
        password,
        email,
      },
    }
  );
  return adding.data;
};

export const getUser = async ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  const res = axios
    .get<UserDetailsBack>(`http://localhost:3000/user/getUser`, {
      params: { name, password },
    })
    .then((res) => res.data);
  return res;
};
// export const resetPassword = async () => {
//   await axios.get("http://localhost:3000/user/resetPassword");
// };
