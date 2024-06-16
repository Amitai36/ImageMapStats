import DisplayResponsiveCards from "../../components/cards/DisplayResponsiveCards";
import { useGetUserLiked } from "../../api/users/query";
import { useUser } from "../../store/User";

function Likes() {
  const { user } = useUser();
  const { data } = useGetUserLiked({ userId: user.id });

  return <DisplayResponsiveCards items={data} />;
}

export default Likes;
