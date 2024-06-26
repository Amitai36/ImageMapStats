import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useAddUserLikes } from "../api/users/query";
import { Results } from "../api/images/types";
import { useUser } from "../store/User";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

interface LikeCardProps {
  img: Results;
  liked: boolean;
  refetchIds: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<string[], unknown>>;
}

function LikeCard(props: LikeCardProps) {
  const { img, liked, refetchIds } = props;
  const { user } = useUser();

  const adding = useAddUserLikes();

  const handleClick = () => {
    adding.mutate({ photoId: img.id, userId: user.id, img });
    refetchIds();
  };

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      {liked ? <Favorite /> : <FavoriteBorderOutlined />}
    </IconButton>
  );
}

export default LikeCard;
