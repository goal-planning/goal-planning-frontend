import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/nav.css';

export default class header extends Component {
    render() {
        return (
            <div className="nav-background">
                <nav className="navbar navbar-expand-lg navbar-dark">
                <Link className="navbar-brand white-font" to="/">Goal Planning</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse relative-position" id="navbarSupportedContent">
                    <ul className="navbar-nav relative-position mr-auto">
                    <li className="nav-item relative-position homelink">
                        <Link className="nav-link white-font" to="/">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item relative-position analyticlink">
                        <Link className="nav-link white-font" to="/analytics">
                            Analytics
                        </Link>
                    </li>
                    <li className="nav-item relative-position resourcelink">
                        <Link className="nav-link white-font" to="/resources">
                            Resources
                        </Link>
                    </li>
                    <li className="nav-item relative-position communitylink">
                        <Link className="nav-link white-font" to="/community">
                            Community
                        </Link>
                    </li>
                    </ul>
                </div>
                </nav>
            </div>
        )
    }
}
