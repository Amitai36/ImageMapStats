import axios from "axios";

export const addUser = async ({
  email,
  name,
  password,
}: {
  name: string;
  password: string;
  email: string;
}) => {
  await axios.post(`http://localhost:3000/user/addUser`, null, {
    params: {
      name,
      password,
      email,
    },
  });
};