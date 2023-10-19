import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Paper,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const rootStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const appBarStyle = {
  flex: "0 0 auto",
};

const contentStyle = {
  flex: "1",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const paperStyle = {
  padding: "20px",
  textAlign: "center",
};

function BankHomePage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/displayCard");
  }
  return (
    <div style={rootStyle}>
      <AppBar position="static" style={appBarStyle}>
        <Toolbar>
          <Typography variant="h6">HDFC Bank</Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" style={contentStyle}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper style={paperStyle}>
              <img
                src="https://www.hdfcbank.com/content/api/contentstream-id/723fb80a-2dde-42a3-9793-7ae1be57c87f/4f9ea091-71e0-484e-b00b-07f39e1fa4e2/Common/DAP/Adobe%20Forms/June-2021/logo_regular.jpg"
                alt=""
              />
              <Typography variant="h4" gutterBottom>
                Welcome to HDFC Bank
              </Typography>
              <Typography variant="body1" gutterBottom>
                We make banking simple and convenient for you.
              </Typography>
              <Button onClick={handleClick} variant="contained" color="primary">
                My Cards
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Accounts</Typography>
                <Typography variant="body2">View your accounts</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Services</Typography>
                <Typography variant="body2">Discover our services</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Contact Us</Typography>
                <Typography variant="body2">Get in touch with us</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default BankHomePage;
