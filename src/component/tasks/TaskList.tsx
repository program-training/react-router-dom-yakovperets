import React, { useEffect, useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import axios from "axios";
import { Todo } from "../../interface/taskInterface";
import { useNavigate } from "react-router-dom";
import { useCurrentUserDetails } from "../../context/CurrentUserContext";
import HomeIcon from "@mui/icons-material/Home";

import {
  CurrentTodoProvider,
  useCurrentTodo,
} from "../../context/CurrentTodoContext";

interface OutletContext {
  users: Todo[] | undefined;
}

const TaskList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[] | undefined>();
  const navigate = useNavigate();
  const { card } = useCurrentUserDetails();

  const { setCurrentTodo } = useCurrentTodo();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<Todo[]>(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers().catch((error) => {
      console.error("Unhandled promise rejection:", error);
    });
  }, []);

  if (!todos) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Typography>User Task List</Typography>
      <Button onClick={() => navigate("/")}>
        <HomeIcon />
      </Button>
      <div>
        {todos
          .filter((todo) => card.id === todo.userId)
          .map((todo) => (
            <div key={todo.id} style={{ marginBottom: "10px" }}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {todo.title}
                  </Typography>
                  <Button
                    onClick={() => {
                      setCurrentTodo(todo);
                      navigate(`/users/${todo.id}/todos/information/`);
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskList;
