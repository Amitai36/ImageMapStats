import { useQueries, useQuery } from "react-query";
import {
  getPhotoStatistics,
  getUserPhotos,
  getUserStatistics,
  queryImage,
} from "./fetch";
import { QueryImageProps } from "./types";
import { getIdLikesByUser } from "../users/fetch";

export const useQueryImage = ({
  photoName,
  pageNumber,
  orderBy,
  userId,
}: QueryImageProps) => {
  return useQueries([
    {
      queryKey: ["images", "photo", "user"],
      queryFn: () => queryImage({ photoName, pageNumber, orderBy }),
      cacheTime: 0,
    },
    {
      queryKey: ["user", "like", "image", "photo"],
      queryFn: () => getIdLikesByUser({ userId: userId! }),
    },
  ]);
};
export const useQueryPhotoStatistics = ({ id }: { id: string }) => {
  return useQuery(["photo", "statistics"], () => getPhotoStatistics({ id }));
};
export const useQueryUserStatistics = ({ name }: { name: string }) => {
  return useQuery(["photo", "statistics"], () => getUserStatistics({ name }));
};
export const useQueryUserPhotos = ({ name }: { name: string }) => {
  return useQuery(["photo", "user"], () => getUserPhotos({ name }));
};
