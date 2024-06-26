import { Grid } from "@mui/material";

import { FetchRes } from "../../api/images/types";
import CreateCards from "./CreateCards";
import LoaderCard from "./LoaderCard";
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";

interface DisplayResponsiveCardsProps {
  items: FetchRes["results"] | undefined;
  ids: string[];
  refetchIds: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<string[], unknown>>;
}

function DisplayResponsiveCards(props: DisplayResponsiveCardsProps) {
  const { items, ids, refetchIds } = props;
  const loader = items
    ? Array(items.length).fill(0)
    : Array(10).fill(<LoaderCard />);

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
        {loader.map((card, index) => (
          <Grid sm={12} md={6} lg={4} item key={index}>
            {items ? (
              <CreateCards
                refetchIds={refetchIds}
                ids={ids}
                res={items[index]}
              />
            ) : (
              card
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default DisplayResponsiveCards;
