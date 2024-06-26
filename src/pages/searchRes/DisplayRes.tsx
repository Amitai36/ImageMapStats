import { SetURLSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SelectOrder from "./SelectOrder";
import { toast } from "react-toastify";
import { useEffect } from "react";

import DisplayResponsiveCards from "../../components/cards/DisplayResponsiveCards";
import { FetchRes, OrderBySearch } from "../../api/images/types";
import CreateTabs from "../../components/CreateTabs";
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from "react-query";

interface DisplayResProps {
  items: FetchRes | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
  setSearchParams?: SetURLSearchParams;
  element: string;
  isLoading: boolean;
  ids: string[];
  refetchIds: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<string[], unknown>>;
}

function DisplayRes(props: DisplayResProps) {
  const {
    items,
    setPage,
    page,
    orderBy,
    setOrderBySearch,
    setSearchParams,
    element,
    isLoading,
    ids,
    refetchIds
  } = props;

  const { t } = useTranslation();

  useEffect(() => {
    if (items?.total === 0 && !isLoading) {
      toast.warning(t("no data"));
    }
  }, [items]);

  return (
    <div style={{ height: "100%", width: "100%", marginTop: "2%" }}>
      {items?.results && items.results.length > 0 && (
        <>
          <div style={{ width: "20%" }}>
            <SelectOrder
              orderBy={orderBy}
              setOrderBySearch={setOrderBySearch}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CreateTabs
              onChange={(_e, NV) => {
                window.sessionStorage.setItem("page", String(NV));
                setPage(NV);
                if (setSearchParams && element)
                  setSearchParams({ element: element, page: String(NV) });
              }}
              value={page}
              tabsLength={items?.total_pages ?? 100}
            />
          </div>
        </>
      )}
      <DisplayResponsiveCards refetchIds={refetchIds} ids={ids} items={items?.results} />
    </div>
  );
}

export default DisplayRes;
