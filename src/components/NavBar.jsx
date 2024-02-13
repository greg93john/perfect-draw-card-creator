function NavBar(props) {
    return (
        <div>
            <ul className="nav navbar-dark nav-pills nav-fill bg-dark justify-content-center py-2" id="pillNav" role="tablist">
                <li className="nav-item" role="presentation" key={"about"}>
                    <button key={"about-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "about") ? " active" : "")} onClick={() => props.buttonFunction("About")} id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        About
                    </button>
                </li>
                <li className="nav-item" role="presentation" key={"deck"}>
                    <button key={"deck-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "deck") ? " active" : "")} onClick={() => props.buttonFunction("Deck")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        Deck
                    </button>
                </li>
                <li className="nav-item" role="presentation" key={"gear"}>
                    <button key={"gear-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "gear") ? " active" : "")} onClick={() => props.buttonFunction("Gear")} id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        Gear
                    </button>
                </li>
                <li className="nav-item" role="presentation" key={"skills"}>
                    <button key={"skills-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "skills") ? " active" : "")} onClick={() => props.buttonFunction("Skills")} id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="false" tabIndex="-1">
                        Skills
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;