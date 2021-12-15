import './App.css';
import {Switch, Route} from "react-router-dom";

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import {auth} from "./firebase/firebase.utils";
import React from "react";



class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/shop" component={ShopPage}/>
                    <Route path="/signin" component={SignInAndSignUpPage}/>

                </Switch>
            </div>
        );
    }


}


export default App;
