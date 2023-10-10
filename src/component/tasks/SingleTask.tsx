import React from "react";
import { useParams, Outlet } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { useCurrentTodo } from "../../context/CurrentTodoContext";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

type ContactsParams = {
  id: string;
};
const SingleTask: React.FC = () => {
  const { currentTodo } = useCurrentTodo();
  const navigate = useNavigate();

  return (
    <Card className="card">
      <Button onClick={() => navigate("/")}>
        <HomeIcon />
      </Button>
      <CardContent>
        <Typography variant="h5" component="div">
          {currentTodo.title}
        </Typography>
        <Typography color="text.secondary">
          {currentTodo.completed ? "true" : "false"}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SingleTask;
