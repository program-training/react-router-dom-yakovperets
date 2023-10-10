import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button } from "@mui/material";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      Home Component
      <Button
        onClick={() => {
          navigate(`/users/`);
        }}
      >
        Users
      </Button>
      <Button
      // onClick={() => {
      //   navigate(`/products/`);
      // }}
      >
        Products
      </Button>
    </div>
  );
};

export default Home;
