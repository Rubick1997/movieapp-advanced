import React, { FunctionComponent } from "react";
import { Pagination } from "@material-ui/lab";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const PaginationComponent: FunctionComponent<{
  setPage: React.Dispatch<React.SetStateAction<number>>;
  numofPages?: number;
  page:number
}> = ({ setPage, numofPages = 10, page }) => {

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scroll(0,0)
      };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={theme}>
      <Pagination count={10} page={page} onChange={handleChange} color="primary"/>
      </ThemeProvider>
    </div>
  );
};

export default PaginationComponent;
