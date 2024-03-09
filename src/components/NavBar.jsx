function NavBar(props) {
    return (
        <div>
            <ul className="nav navbar-dark nav-pills nav-fill bg-dark justify-content-center py-2" id="pillNav" role="tablist">
                <li className="nav-item" role="presentation" key={"deck"}>
                    <button key={"deck-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "deck") ? " active" : "")} onClick={() => props.buttonFunction("Deck")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        Deck
                    </button>
                </li>

                <li className="nav-item" role="presentation" key={"exports"}>
                    <button key={"exports-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "exports") ? " active" : "" + props.numOfCards <= 0 ? " disabled" : "")} onClick={() => props.buttonFunction("Exports")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        Exports
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;