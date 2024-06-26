import { useEffect, useState } from "react";

import DisplayResponsiveCards from "../../components/cards/DisplayResponsiveCards";
import { useGetIdLikesByUser, useGetUserLiked } from "../../api/users/query";
import { Results } from "../../api/images/types";
import { useUser } from "../../store/User";

function Likes() {
  const { user } = useUser();
  const { data, isLoading } = useGetUserLiked({ userId: user.id });
  const {
    data: dataIds,
    isLoading: loadingIds,
    refetch: refetchIids,
  } = useGetIdLikesByUser({ userId: user.id });
  const [img, setImg] = useState<Results[]>();

  useEffect(() => {
    if (data && !isLoading) setImg(data);
  }, [isLoading, data]);
  if (loadingIds || isLoading) return <h1>loading</h1>;
  return (
    <DisplayResponsiveCards
      ids={dataIds as string[]}
      items={img}
      refetchIds={refetchIids}
    />
  );
}

export default Likes;
