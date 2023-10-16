import * as React from "react";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";
import { InputAdornment, ThemeProvider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";

export default function SearchInputBox({
  label = "",
  variant = "outlined",
  name = "",
  params,
  value = "",
  onChange = () => {},
  placeHolder = "Search",
  helperText = "",
  error = false,
  type = "text",
  disabled = false,
  sx = {},
  iconColor = "",
  iconSize = "medium",
}) {
  const newTheme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: { borderRadius: "10px" },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={newTheme}>
      <TextField
        {...params}
        sx={{ ...sx, borderRadius: "0px" }}
        name={name}
        size="small"
        InputLabelProps={{ shrink: true }}
        label={label}
        variant={variant}
        value={value}
        onChange={onChange}
        helperText={helperText}
        placeholder={placeHolder}
        error={Boolean(error)}
        fullWidth
        type={type}
        disabled={disabled}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: iconColor }} size={iconSize} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <MicNoneIcon sx={{ color: iconColor }} size={iconSize} />
            </InputAdornment>
          ),
        }}
      />
    </ThemeProvider>
  );
}
