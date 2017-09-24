import React, {Component} from 'react';
import myPhoto from '../../assets/img/profilePhoto.jpg';
import Card from '../../components/Card/Card.jsx'

class About extends Component {
    constructor(props) {
        super(props);
    }

        render() {
        const textCenterStyle={
            textAlign: 'center',
            fontSize: '24px',
            fontWeight:700
        }

            const textCenterStyle2={
                textAlign: 'center',
                fontSize: '18px',
                marginTop:'10px',
                color:'#777'
            }
            const textCenterStyle3={
                paddingRight:'10%'
            }


            return (
                <div className="content">
                    <div className="container-fluid">
                        <aside className="col-md-4 col-sm-12" width="100%">
                           <div className="card card-2">
                                <div>
                                    <div>
                                        <img role="presentation" className="img-circle center-block" src={myPhoto} width="50%"/>
                                    </div>

                                    <h1 style={textCenterStyle}>Dario Frongillo</h1>
                                    <h2 style={textCenterStyle2}>Software Architect</h2>

                                    <div className="divider"></div>
                                    <ul className="list-unstyled contact-links text-center">
                                        <li>
                                            <i className="fa fa-lg fa-location-arrow">

                                            </i>
                                            {"Livorno, Italy"}
                                        </li>
                                        <li>
                                            <i className="fa fa-lg fa-envelope">

                                            </i>
                                           <a href="mailto:{profileObj.email}">
                                               dario.frongillo@gmail.com
                                           </a>
                                        </li>
                                    </ul >
                                    <div className="divider"></div>
                                    <ul className="profileLinks list-inline text-center">
                                        <li>
                                            <a className="fa fa-linkedin fa-2x" href="https://twitter.com/jonbloomer">

                                            </a>
                                        </li>
                                        <li>
                                            <a className="fa fa-github fa-2x" href="https://twitter.com/jonbloomer">

                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>



                        </aside>

                        <main className="col-md-8" style={textCenterStyle3}>
                            <div className="card card-2" >
                                <section>
                                    <i className="fa fa-lg fa-user"></i>
                                    <h2>About</h2>
                                    <div>
                                        Over the past 16 years I have continuously challenged myself with new languages, frameworks and methodologies. My core languages have always been html, css & javascript but I have also worked as a full stack php developer building both bespoke CMS solutions and small business applications. My current role at IAG is Front End Lead for a small React team and have been developing with React and Redux for the past 2 years.
                                    </div>
                                </section>
                            </div>
                        </main>
                    </div>

                </div>
            )
        }

}

export default About;
