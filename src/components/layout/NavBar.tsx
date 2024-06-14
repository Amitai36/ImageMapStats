import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Favorite, Image } from "@mui/icons-material";
import { ReactNode, useState } from "react";

import DialogComponent from "../DialogComponent";
import ChosseLang from "../languages/ChosseLang";
import SearchImg from "../SearchImg";
import DarkMode from "../DarkMode";
import SignUp from "../../pages/signup";
import SignIn from "../../pages/signIn";
import { useTranslation } from "react-i18next";

interface NavBarProps {
  children?: ReactNode;
}

function NavBar(props: NavBarProps) {
  const { t } = useTranslation();
  const singUpWord = t("singUp");
  const singInWord = t("singIn");
  const navigate = useNavigate();
  const components = props?.children;
  const { pathname } = useLocation();
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

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
    <div style={{ height: "10%" }}>
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
            {pathname.includes("search") && (
              <Button onClick={() => navigate("/liked")}>
                <Favorite />
              </Button>
            )}
            {pathname !== "/home" && (
              <div>
                {pathname !== "/" && <SearchImg />}
                {!pathname.includes("search") && (
                  <>
                    <Button
                      onClick={() => setSignUp(true)}
                      sx={{ marginInline: "3px" }}
                      variant="contained"
                    >
                      {singUpWord}
                    </Button>
                    <Button
                      onClick={() => setSignIn(true)}
                      sx={{ marginInline: "3px" }}
                      variant="contained"
                    >
                      {singInWord}
                    </Button>
                  </>
                )}
              </div>
            )}
            {components}
          </Toolbar>
        </AppBar>
      </div>
      <Outlet />
      <DialogComponent
        open={signUp}
        setOpen={setSignUp}
        title={{ color: "#fff", text: "sign up" }}
        content={<SignUp />}
      />
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
