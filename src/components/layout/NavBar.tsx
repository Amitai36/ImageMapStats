import { AppBar, Button, Toolbar } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Image } from "@mui/icons-material";
import { ReactNode } from "react";
import ChosseLang from "../languages/ChosseLang";
import SearchImg from "../SearchImg";
import DarkMode from "../DarkMode";

interface NavBarProps {
  children?: ReactNode;
}

function NavBar(props: NavBarProps) {
  const components = props?.children;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const buttons = [
    <Button color="info" onClick={() => navigate("/")} size="large">
      <Image fontSize="large" />
      SNAPSEARCH INSIGHT
    </Button>,
    <ChosseLang />,
    <DarkMode />,
  ];
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "10%" }}>
        <AppBar
          sx={{
            backdropFilter: "blur(1px)",
            backgroundColor: "transparent",
          }}
        >
          <Toolbar variant="dense">
            {buttons.map((button) => (
              <div key={button.key} style={{ marginInline: "10px" }}>
                {button}
              </div>
            ))}
            {pathname !== "/home" && <SearchImg />}
            {components}
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
    </div>
  );
}

export default NavBar;
