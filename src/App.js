import React, {Component} from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import TableContainer from './components/product/table/TableContainer';
import EditContainer from "./components/product/edit/EditContainer";
import DetailsContainer from "./components/product/details/DetailsContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">

                    <Header/>

                    <div className="content">
                        <Switch>
                            <Route exact path="/" render={ () => <Redirect to="/products"/> }/>

                            <Route exact path="/products" component={TableContainer}/>
                            <Route path="/products/:id/edit" component={EditContainer}/>
                            <Route path="/products/:id/details" component={DetailsContainer}/>
                        </Switch>
                    </div>

                    <Footer/>

                </div>
            </BrowserRouter>
        );
    }
}

export default App;
