import { AppBar, Button, Toolbar } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Image } from "@mui/icons-material";
import { ReactNode, useState } from "react";
import ChosseLang from "../languages/ChosseLang";
import SearchImg from "../SearchImg";
import DarkMode from "../DarkMode";
import SignIn from "../../pages/signup";
import DialogComponent from "../DialogComponent";

interface NavBarProps {
  children?: ReactNode;
}

function NavBar(props: NavBarProps) {
  const navigate = useNavigate();
  const components = props?.children;
  const { pathname } = useLocation();
  const [signIn, setSignIn] = useState(false);
  const [_logIn, setLogIn] = useState(false);

  const buttons = [
    <Button
      key={"icon"}
      color="info"
      onClick={() => navigate("/")}
      size="large"
    >
      <Image fontSize="large" />
      SNAPSEARCH INSIGHT
    </Button>,
    <ChosseLang key={"lang"} />,
    <DarkMode key={"mode"} />,
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
            {pathname !== "/home" && (
              <div>
                <SearchImg />
                <Button
                  onClick={() => setSignIn(true)}
                  sx={{ marginInline: "3px" }}
                  variant="contained"
                >
                  Sing in
                </Button>
                <Button
                  onClick={() => setLogIn(true)}
                  sx={{ marginInline: "3px" }}
                  variant="contained"
                >
                  log in
                </Button>
              </div>
            )}
            {components}
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
      <DialogComponent
        open={signIn}
        setOpen={setSignIn}
        title={{ color: "#fff", text: "sign in" }}
        content={<SignIn />}
      />
    </div>
  );
}

export default NavBar;
