import React from "react";
import { Route, Switch } from "react-router-dom";
import { Footer } from "./components/footer";
import { Finish } from "./pages/finish";
import { HomePage } from "./pages/home";
import { Shop } from "./pages/shop";
import { Stock } from "./pages/stock";

export const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/shopping" exact component={Shop} />
        <Route path="/stock" exact component={Stock} />
        <Route path="/finish" exact component={Finish} />
    </Switch>
)