import { Favorite } from "@mui/icons-material";
import { IconButton } from "@mui/material";

import { useAddUserLikes } from "../api/users/query";
import { Results } from "../api/images/types";
import { useUser } from "../store/User";

interface LikeCardProps {
  img: Results;
}

function LikeCard(props: LikeCardProps) {
  const { img } = props;
  const { user } = useUser();

  const adding = useAddUserLikes();

  const handleClick = () => {
    adding.mutate({ photoId: img.id, userId: user.id, img });
  };

  return (
    <IconButton onClick={handleClick} aria-label="add to favorites">
      <Favorite />
    </IconButton>
  );
}

export default LikeCard;
