import { useState } from "react";
import CardsRegistered from "../CardsRegistered/CardsRegistered";
import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";

export default function CardDisplay() {
  const cardList = [{}, {}];
  const [myCards, setMyCards] = useState(cardList);
  const [approvalList, setApprovalList] = useState([{}, {}]);
  return (
    <>
      {myCards.map((card) => {
        return (
          <>
            <CardsRegistered />
            <Alert severity="success">
              <AlertTitle>Active Card</AlertTitle>
              This is a success alert — <strong>check it out!</strong>
            </Alert>
          </>
        );
      })}
      {approvalList.map((card) => {
        return (
          <>
            <CardsRegistered />
            <Alert severity="error">
              <AlertTitle>New Card Request</AlertTitle>
              This is an error alert — <strong>check it out!</strong>
            </Alert>
            <div style={{ margin: "10px auto" }}>
              <Button
                style={{ marginRight: "10px" }}
                variant="contained"
                color="success"
              >
                Approve
              </Button>
              <Button variant="outlined" color="error">
                Decline
              </Button>
            </div>
          </>
        );
      })}
    </>
  );
}
