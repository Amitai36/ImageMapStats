import React from "react";
import { useParams } from "react-router-dom";
import { Avatar, Stack, Typography } from "@mui/material";

import ResponsiveCardDisplay from "../../components/cards/DisplayResponsiveCards";
import { useQueryUserPhotos } from "../../api/images/query";

export default function UserPhotos() {
  const scrollUp = React.useRef<HTMLDivElement>(null);
  const { name } = useParams();
  const { data, isLoading } = useQueryUserPhotos({ name: name as string });

  const user = data && data[0]?.user;

  React.useEffect(() => {
    if (scrollUp.current) {
      scrollUp.current?.scrollIntoView({ behavior: "smooth", inline: "start" });
    }
  }, []);

  return (
    <div
      ref={scrollUp}
      // style={{ width: "100%", height: "90%", maxHeight: "90%" }}
    >
      {isLoading || !data ? (
        <Typography>Loading</Typography>
      ) : (
        <>
          <Stack>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user?.profile_image.large}
              />
              <Typography component="span" variant="h5" marginInline={"2%"}>
                {user?.last_name ?? "" + user?.first_name ?? ""}
              </Typography>
            </div>
            <ResponsiveCardDisplay items={data} />
          </Stack>
        </>
      )}
    </div>
  );
}
