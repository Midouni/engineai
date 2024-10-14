import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <StyledLink to={"/"}>Security Dashboard</StyledLink>
          </Typography>
          <nav>
            <a
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
                margin: "0 10px",
              }}
            >
              Home
            </a>
          </nav>
        </Toolbar>
      </AppBar>

      <MainContainer>
        <Outlet />
      </MainContainer>

      <FooterContainer>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Securities Dashboard. All rights reserved.
        </Typography>
      </FooterContainer>
    </>
  );
};

const MainContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  minHeight: "calc(100vh - 64px - 48px)",
}));

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  marginTop: "auto",
}));

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export default Layout;
