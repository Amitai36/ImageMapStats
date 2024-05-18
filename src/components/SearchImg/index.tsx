import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHotkeys } from "react-hotkeys-hook";
import TextField from "@mui/material/TextField";
import { CameraAlt, SearchOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

function SearchImg() {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  const {
    i18n: { dir },
  } = useTranslation();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    navigate(`/search?element=${search}&page=${1}`);
  };
  useHotkeys("ctrl+i", () => {
    if (inputRef.current) {
      inputRef?.current.focus();
    }
  });

  return (
    <TextField
      placeholder="crtl + i"
      value={search}
      inputRef={inputRef}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === "Enter" && search) {
          handleSearch();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position={dir() === "ltr" ? "start" : "end"}>
            <Button onClick={handleSearch} disabled={!search} size="small">
              <SearchOff />
            </Button>
            <Button disabled={!!search}>
              <CameraAlt />
            </Button>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default SearchImg;
