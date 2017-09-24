import React, {Component} from 'react';
import { } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import imagine from '../../assets/img/sidebar-3.jpg';
import logo from '../../assets/img/reactlogo.png';
import programmerIcon from '../../assets/img/programmer-icon.png'
import HeaderLinks from '../Header/HeaderLinks.jsx';

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            width: window.innerWidth
        }
    }

    updateDimensions(){
        this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }
    render(){

        return (
            <div id="sidebar" className="sidebar" data-color="black" data-image={imagine}>
                <div className="sidebar-background"></div>
                    <div className="logo">
                        <a className="simple-text logo-mini">
                            <div className="logo-img">
                                <img src={programmerIcon} alt="logo_image"/>
                            </div>

                        </a>
                        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                           Dario Frongillo
                        </a>
                    </div>
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        { this.state.width <= 991 ? (<HeaderLinks />):null }
                        <li >
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-graph"></i>
                                <p>ABOUT</p>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-graph"></i>
                                <p>WORK EXPERIENCE</p>
                            </NavLink>
                        </li>
                        <li >
                            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
                                <i className="pe-7s-graph"></i>
                                <p>CONTACT ME</p>
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
