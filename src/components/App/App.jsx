import React, { useEffect } from "react";

import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
// import Container from "../DashBoard/Container";
import Nav from "../Nav/Nav";
import NewNav from "../Nav/NewNav";
import Footer from "../Footer/Footer";
import BottomNav from "../Footer/BottomNav";
import Nav from "../Nav/Nav";
import NewNav from "../Nav/NewNav";
import Footer from "../Footer/Footer";
import BottomNav from "../Footer/BottomNav";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import AdminDashboard from "../Admin/AdminDashboard/AdminDashboard";
import JobDetails from "../Admin/AdminDashboard/JobDetails";

import "./App.css";
import KitchenForm from "../Client/Kitchen/KitchenForm";
import BathroomForm from "../Client/Bathroom/BathroomForm";
import WipeDustForm from "../Client/WipeDust/WipeDustForm";
import OtherRoomForm from "../Client/OtherRoom/OtherRoomForm";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <NewNav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
            <BottomNav />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
            <BottomNav />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>
          <ProtectedRoute exact path="/jobHistory">
            <JobHistory />
          </ProtectedRoute>

          <Route exact path="/adminDashboard">
            {user.id ? (
              <AdminDashboard />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/jobDetails">
            {user.id ? <JobDetails /> : <LoginPage />}
          </Route>

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>

          <Route exact path="/profile">
            {user.id ? (
              <>
                <ProfilePage />
                <BottomNav />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route exact path="/bathroomForm">
            {user.id ? (
              <>
                <BathroomForm />
                <BottomNav />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route exact path="/kitchenForm">
            {user.id ? (
              <>
                <KitchenForm />
                <BottomNav />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route
            // logged in shows OtherRoomForm else shows LoginPage
            exact
            path="/otherRoomForm"
          >
            {user.id ? (
              <>
                <OtherRoomForm />
                <BottomNav />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>

          <Route exact path="/wipeDustForm">
            {user.id ? (
              <>
                <WipeDustForm />
                <BottomNav />
              </>
            ) : (
              <LoginPage />
            )}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        {/* <Menu />
        <Container /> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
