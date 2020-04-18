import { Route, Switch, Router } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import AllGoals from "../Routes/AllGoals";
import AchievedGoals from "../Routes/AchievedGoals";
import AchievingGoals from "../Routes/AchievingGoals";
import MyGoals from "../Routes/MyGoals";
import Profile from "../Routes/Profile";
import Auth from "../Routes/Auth";

const LoggedOutRoutes = () => (
    <Switch>
        <Route exact path="/" component={Auth} />
    </Switch>
);

const LoggedInRoutes = () => (
    <Switch>
        <Route exact path="/" component={AllGoals} />
        <Route exact path="/achieved" component={AchievedGoals} />
        <Route exact path="/achieving" component={AchievingGoals} />
        <Route exact path="/mygoals" component={MyGoals} />
        <Route exact path="/:username" component={Profile} />
    </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
    isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />
);
AppRouter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppRouter;