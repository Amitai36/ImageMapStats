import { FetchRes, OrderBySearch } from "../../api/images/types";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SelectOrder from "./SelectOrder";
import CreateTabs from "../../components/CreateTabs";
import { SetURLSearchParams } from "react-router-dom";
import DisplayResponsiveCards from "../../components/cards/DisplayResponsiveCards";
import { toast } from "react-toastify";

interface DisplayResProps {
  items: FetchRes | undefined;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  orderBy: OrderBySearch;
  setOrderBySearch: React.Dispatch<React.SetStateAction<OrderBySearch>>;
  setSearchParams?: SetURLSearchParams;
  element: string;
  isLoading: boolean;
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
  } = props;

  const { t } = useTranslation();

  useEffect(() => {
    console.log(items?.total);
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
      <DisplayResponsiveCards items={items} />
    </div>
  );
}

export default DisplayRes;