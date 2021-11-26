import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Financing from "./components/Financing/Financing";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import Gallery from "./components/Gallery/Gallery";
import ServiceDetails from "./components/ServiceDetails/ServiceDetails";

import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <Header></Header>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/gallery">
              <Header></Header>
              <Gallery></Gallery>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <Header></Header>
              <About></About>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/financing">
              <Header></Header>
              <Financing></Financing>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <Route path="/register">
              <Header></Header>
              <Register></Register>
              <Footer></Footer>
            </Route>
            <Route path="*">
              <Header></Header>
              <NotFound></NotFound>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
