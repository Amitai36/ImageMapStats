import { Grid } from "@mui/material";
import { FetchRes } from "../../api/images/types";
import CreateCards from "./CreateCards";
import LoaderCard from "./LoaderCard";

interface DisplayResponsiveCardsProps {
  items: FetchRes["results"] | undefined;
}

function DisplayResponsiveCards(props: DisplayResponsiveCardsProps) {
  const { items } = props;
  const loader = Array(10).fill(<LoaderCard />);
  const results = items ?? loader;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        width: "100%",
      }}
    >
      <Grid width={"100%"} container spacing={2}>
        {results.map((card, index) => (
          <Grid sm={12} md={6} lg={4} item key={index}>
            {"id" in card ? <CreateCards res={card} /> : card}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayResponsiveCards;
