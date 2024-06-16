import axios from "axios";

import { Results } from "../images/types";
import { UserDetailsBack } from "./types";

const BASE_URL = process.env.BASE_URL;

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
    `${BASE_URL}/user/addUser`,
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

export const addUserLike = async ({
  userId,
  photoId,
  img,
}: {
  userId: string;
  photoId: string;
  img: Results;
}) => {
  await axios.post<UserDetailsBack>(
    `${BASE_URL}/likes/addLikesByUser?userId=${userId}&photoId=${photoId}`,
    img
  );
};

export const getUser = async ({
  name,
  password,
}: {
  name: string;
  password: string;
}) => {
  const res = axios
    .get<UserDetailsBack>(`${BASE_URL}/user/getUser`, {
      params: { name, password },
    })
    .then((res) => res.data);
  return res;
};

export const getUserLiked = async ({ userId }: { userId: string }) => {
  const res = axios
    .get<Results[]>(`${BASE_URL}/likes/getLikeByUser?userId=${userId}`)
    .then((res) => res.data);
  return res;
};
