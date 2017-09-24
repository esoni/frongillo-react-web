import React, {Component} from 'react';


class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="#about">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#work-experience">
                                    Work experience
                                </a>
                            </li>
                            <li>
                                <a href="#pablo">
                                    Contact me
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} Dario Frongillo. All Rights Reserved
                    </p>
                </div>
            </footer>
		);
	}
}

export default Footer;
