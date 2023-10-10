import React, { useEffect, useState } from "react";
import { Link, Route, Routes, Outlet } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material";
import SingleUser from "./SingleUser";
import axios from "axios";
import User from "../../interface/userInterface";
import { useNavigate } from "react-router-dom";
import {
  CurrentUserDetailsProvider,
  useCurrentUserDetails,
} from "../../context/CurrentUserContext";
import HomeIcon from "@mui/icons-material/Home";

interface OutletContext {
  users: User[] | undefined;
}

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[] | undefined>();
  const navigate = useNavigate();
  const { setCardDetails } = useCurrentUserDetails();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers().catch((error) => {
      console.error("Unhandled promise rejection:", error);
    });
  }, []);

  if (!users) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Button onClick={() => navigate("/")}>
        <HomeIcon />
      </Button>
      <Typography>User List</Typography>

      <div>
        {users.map((user) => (
          <div key={user.id} style={{ marginBottom: "10px" }}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {user.name}
                </Typography>
                <Button
                  onClick={() => {
                    setCardDetails(user);
                    navigate(`/users/${user.id}`);
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      <Routes>
        <Route path=":id" element={<SingleUser />} />
      </Routes>
    </div>
  );
};

export default UsersList;
