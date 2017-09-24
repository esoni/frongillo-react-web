import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';



class App extends Component {

    constructor(props){
        super(props);
   }

    render() {
        return (
            <div className="wrapper">
                <Sidebar {...this.props} />
                <div id="main-panel" className="main-panel">
                    <Header {...this.props}/>
                    <Switch>
                        <Route path="/about" component={About}/>
                        <Redirect from="/" to="/about"/>
                    </Switch>
                    <Footer />

                </div>
            </div>
            );
    }
}

export default App;
