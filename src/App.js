import './App.css';
import HomePage from "./components/pages/homepage/homepage.component";
import {Switch, Route} from "react-router-dom";
import ShopPage from "./components/pages/shop/shop.component";
import Header from "./components/header/header.component";


function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/shop" component={ShopPage}/>

            </Switch>
        </div>
    );
}


export default App;
