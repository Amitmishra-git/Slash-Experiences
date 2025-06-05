import React from "react";
import Homepage from "./components/Homepage";
import ExperienceCatalog from "./components/ExperienceCatalog";
import ChatInterface from "./components/ChatInterface";
import Profile from "./components/Profile";
import ExperienceCRUD from "./components/Admin/ExperienceCRUD";
import BookingManagement from "./components/Admin/BookingManagement";
import GoogleSignIn from "./components/Auth/GoogleSignIn";
import EmailPassword from "./components/Auth/EmailPassword";
import './App.css';

function App() {
  return (
    <div>
      <h1>Slash Experiences Platform</h1>
      <Homepage />
      <GoogleSignIn />
      <EmailPassword />
      <Profile />
      <ExperienceCatalog />
      <ChatInterface />
      <ExperienceCRUD />
      <BookingManagement />
    </div>
  );
}

export default App;
