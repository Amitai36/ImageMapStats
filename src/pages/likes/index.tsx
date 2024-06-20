import DisplayResponsiveCards from "../../components/cards/DisplayResponsiveCards";
import { useGetUserLiked } from "../../api/users/query";
import { useUser } from "../../store/User";
import { useEffect, useState } from "react";
import { Results } from "../../api/images/types";

function Likes() {
  const { user } = useUser();
  const { data, isLoading } = useGetUserLiked({ userId: user.id });
  console.log("🚀 ~ Likes ~ data:", data);
  console.log("🚀 ~ Likes ~ isLoading:", isLoading);
  const [img, setImg] = useState<Results[]>();

  useEffect(() => {
    if (data && !isLoading) setImg(data);
  }, [isLoading, data]);

  return <DisplayResponsiveCards items={img} />;
}

export default Likes;
