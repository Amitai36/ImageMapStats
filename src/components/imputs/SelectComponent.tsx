import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

interface SelectComponentProps<T> {
  lable: string;
  options: { optionValue: T; lable: string | JSX.Element }[];
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

function SelectComponent<T>(props: SelectComponentProps<T>) {
  const { lable, options, setValue, value } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{lable}</InputLabel>
      <Select
        size="small"
        value={value}
        label={lable}
        onChange={(newValue) => {
          const nv = newValue.target.value;
          if (typeof nv !== "string") setValue(nv);
        }}
      >
        {options.map((option) => (
          //@ts-expect-error the menu item dont like T
          <MenuItem key={option.lable} value={option.optionValue}>
            {option.lable}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectComponent;
