import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./component/Home";
import About from "./component/About";
import UsersList from "./component/users/UsersList";
import SingleUser from "./component/users/SingleUser";
import TaskList from "./component/tasks/TaskList";
import SingleTask from "./component/tasks/SingleTask";
import { CurrentUserDetailsProvider } from "./context/CurrentUserContext";
import { CurrentTodoProvider } from "./context/CurrentTodoContext";

function App() {
  return (
    <CurrentUserDetailsProvider>
      <CurrentTodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/users//*" element={<UsersList />} />
            <Route path="/users/:id" element={<SingleUser />} />
            <Route path="users/:id/todos//*" element={<TaskList />} />
            <Route
              path="users/:id/todos/information/"
              element={<SingleTask />}
            />
          </Routes>
        </BrowserRouter>
      </CurrentTodoProvider>
    </CurrentUserDetailsProvider>
  );
}

export default App;
