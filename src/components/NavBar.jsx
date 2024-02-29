function NavBar(props) {
    return (
        <div>
            <ul className="nav navbar-dark nav-pills nav-fill bg-dark justify-content-center py-2" id="pillNav" role="tablist">
                <li className="nav-item" role="presentation" key={"deck"}>
                    <button key={"deck-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "deck") ? " active" : "")} onClick={() => props.buttonFunction("Deck")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        Deck
                    </button>
                </li>

                <li className="nav-item" role="presentation" key={"previewpdf"}>
                    <button key={"previewpdf-button"} className={"nav-link text-light" + ((props.activeTabName.toLowerCase() === "previewpdf") ? " active" : "")} onClick={() => props.buttonFunction("PreviewPDF")} id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                        PreviewPDF
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;