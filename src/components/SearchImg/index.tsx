import { CameraAlt, SearchOff } from "@mui/icons-material";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useRef, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

function SearchImg() {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearch(e.target.value);
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
      InputProps={{
        endAdornment: (
          <InputAdornment
            position={/* dir === "ltr" ? "start" : "end" */ "end"}
          >
            <Button disabled={!search} size="small">
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
