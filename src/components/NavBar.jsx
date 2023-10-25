import React from "react";

function NavBar() {
    return (
        <ul className="nav navbar-dark nav-pills nav-fill bg-dark justify-content-center py-2" id="pillNav" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">About</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">Skills</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light" id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">Gear</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light" id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Feats</button>
            </li>
        </ul>
    );
}

export default NavBar;


/*
<ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{"--bs-nav-link text-light-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)"}}>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link text-light rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
            </li>
        
</ul>
*/