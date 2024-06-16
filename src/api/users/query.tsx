import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";

import { addUser, addUserLike, getUser, getUserLiked } from "./fetch";
import { Results } from "../images/types";
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

export const useAddUserLikes = () => {
  return useMutation({
    mutationFn: ({
      photoId,
      userId,
      img,
    }: {
      userId: string;
      photoId: string;
      img: Results;
    }) => {
      return addUserLike({
        photoId,
        userId,
        img,
      });
    },
    mutationKey: ["user"],
    onSuccess: () => {
      toast.success("גם אנחנו אהבנו שאהבת");
    },
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

export const useGetUserLiked = ({ userId }: { userId: string }) => {
  return useQuery(["user", "like"], () => getUserLiked({ userId }), {
    onError(err: string) {
      console.log(err);
      toast.error(err);
    },
  });
};
