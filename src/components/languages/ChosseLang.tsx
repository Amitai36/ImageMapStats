import { useState } from "react";
import { languages } from "./list";
import SelectComponent from "../imputs/SelectComponent";
import { Typography } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

function ChosseLang() {
  const [lang, setLang] = useState<string>();
  const selectable = languages.map((l) => {
    return {
      optionValue: l.code,
      lable: (
        <Typography alignItems={"center"}>
          <ReactCountryFlag
            style={{ fontSize: 25, margin: 5 }}
            svg
            countryCode={l.countryCode}
            className="emojiFlag"
          />
          {l.lang}
        </Typography>
      ),
    };
  });

  return (
    <SelectComponent
      lable="בחירת שפה"
      options={selectable}
      setValue={setLang}
      value={lang}
    />
  );
}

export default ChosseLang;
