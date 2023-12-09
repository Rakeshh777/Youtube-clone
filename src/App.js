import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import Header from "./Components/header/Header";
import Sidebar from "./Components/sidebar/Sidebar";
import HomeScreen from "./screens/homeScreens/HomeScreens";
import LoginScreen from "./screens/loginScreen/LoginScreen";

import { Redirect, Route, Switch } from "react-router-dom";

import "./_app.scss";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import WatchScreen from "./screens/watchScreen/WatchScreen";
import SearchScreen from "./screens/SearchScreen";
import SubscriptionScreen from "./screens/subscriptionScreen/SubscriptionScreen";
import ChannelScreen from "./screens/channelScreen/ChannelScreen";

const Layout = ({ children }) => {
  const [sidebar, toggleSidebar] = useState(false);

  const handleToggleSidebar = () => toggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_container">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
        <Container fluid className="app_main ">
          {children}
        </Container>
      </div>
    </>
  );
};

const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);

  const history = useHistory();
  useEffect(() => {
    if (!loading && !accessToken) {
      history.push("./auth");
    }
  }, [accessToken, loading, history]);

  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path="/auth">
        <LoginScreen />
      </Route>

      <Route path="/search/:query">
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>
      <Route path="/feed/subscriptions">
        <Layout>
          <SubscriptionScreen />
        </Layout>
      </Route>
      <Route path="/channel/:channelId">
        <Layout>
          <ChannelScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default App;
