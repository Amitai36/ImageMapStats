import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";

interface SelectComponentProps<T> {
  lable: string;
  options: { optionValue: T; lable: string | JSX.Element }[];
  value: T;
}

function SelectComponent<T>(props: SelectComponentProps<T> & SelectProps) {
  const { lable, options, value, ...other } = props;
  return (
    <FormControl fullWidth>
      <InputLabel>{lable}</InputLabel>
      <Select size="small" value={value} label={lable} {...other}>
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
