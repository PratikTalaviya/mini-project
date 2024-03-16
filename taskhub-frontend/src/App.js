import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginRegister from "./components/Auth/LoginRegister";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import UserContextProvider from "./context/UserContextPovider";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import DashboardHome from "./components/DashboardHome";
import Projects from "./components/Projects";
import Todos from "./components/Todos";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginRegister />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route index element={<DashboardHome />} />
            <Route
              path="notes"
              element={
                <>
                  <NoteForm />
                  <NoteList />
                </>
              }
            />
            <Route path="todos" element={<Todos />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;
