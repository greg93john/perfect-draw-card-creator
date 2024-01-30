import React from "react";
import MainView from './MainView';

function NavBar(props) {
    return (
        <div>
            <ul className="nav navbar-dark nav-pills nav-fill bg-dark justify-content-center py-2" id="pillNav" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-light active" onClick={() => props.buttonFunction("About")} id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        About
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-light" onClick={() => props.buttonFunction("Skills")} id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        Skills
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-light" onClick={() => props.buttonFunction("Gear")} id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        Gear
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link text-light" onClick={() => props.buttonFunction("Feats")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        Feats
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;