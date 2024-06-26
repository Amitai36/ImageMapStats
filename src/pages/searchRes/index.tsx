import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { OrderBySearch } from "../../api/images/types";
import { useQueryImage } from "../../api/images/query";
import DisplayRes from "./DisplayRes";
import { useUser } from "../../store/User";

function SearchRes() {
  const [search, setSearch] = useSearchParams();
  const page = search?.get("page") ? parseInt(search.get("page")!) : 1;
  const element = search.get("element") as string;
  const [pageNumber, setPageNumber] = useState(page);
  const [orderBy, setOrderBy] = useState<OrderBySearch>("latest");
  const { user } = useUser();
  const {
    "0": { data, isLoading, refetch },
    "1": { data: ids, isLoading: loadingIds, refetch: refetchIds },
  } = useQueryImage({
    pageNumber,
    photoName: element ?? "",
    orderBy,
    userId: user.id,
  });

  useEffect(() => {
    refetch();
    refetchIds();
  }, [orderBy, pageNumber, element]);

  return (
    <DisplayRes
      ids={ids as string[]}
      isLoading={isLoading && loadingIds}
      items={data}
      orderBy={orderBy}
      page={pageNumber}
      setOrderBySearch={setOrderBy}
      setPage={setPageNumber}
      setSearchParams={setSearch}
      element={element}
      refetchIds={refetchIds}
    />
  );
}

export default SearchRes;
