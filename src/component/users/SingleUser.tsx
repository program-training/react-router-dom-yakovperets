import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import User from "../../interface/userInterface";
import { useOutletContext } from "react-router-dom";
import { useCurrentUserDetails } from "../../context/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

type ContactsParams = {
  id: string;
};
const SingleUser: React.FC = () => {
  const params = useParams<ContactsParams>();
  const { card } = useCurrentUserDetails();
  const navigate = useNavigate();

  return (
    <Card className="card">
      <Button onClick={() => navigate("/")}>
        <HomeIcon />
      </Button>
      <CardContent>
        <Typography variant="h5" component="div">
          {card.name}
        </Typography>
        <Typography color="text.secondary">{card.email}</Typography>

        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          Address
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${card.address.street}, ${card.address.suite}, ${card.address.city}, ${card.address.zipcode}`}
        </Typography>

        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          Phone
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.phone}
        </Typography>

        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.website}
        </Typography>

        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {card.company.name} - {card.company.catchPhrase}
        </Typography>
        <Button
          onClick={() => {
            //   setCardDetails(todo); // Fix: setCardDetails(todo) instead of setCardDetails(filteredUser)
            navigate(`/users/${card.id}/todos/`);
          }}
        >
          View Todos
        </Button>
      </CardContent>
    </Card>
  );
};

export default SingleUser;
