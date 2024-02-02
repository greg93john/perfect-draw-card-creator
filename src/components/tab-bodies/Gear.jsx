import React from "react";

function Gear(props) {
    return (
        <div className="card-body">
            <div className="border border-dark rounded my-2">
                <div className="row">
                    <div className="col">
                        <h5>Platinum</h5>
                        <p>0</p>
                    </div>
                    <div className="col">
                        <h5>Gold</h5>
                        <p>0</p>
                    </div>
                    <div className="col">
                        <h5>Silver</h5>
                        <p>0</p>
                    </div>
                    <div className="col">
                        <h5>Copper</h5>
                        <p>0</p>
                    </div>
                </div>
            </div>

            <div className="border border-dark rounded my-2">
                <div className="row">
                    <div className="col">
                        <p><b>Current Bulk: </b> 0 </p>
                    </div>
                    <div className="col">
                        <p><b>Encumbered: </b> 0 </p>
                    </div>
                    <div className="col">
                        <p><b>Maximum: </b> 0 </p>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <button className="btn btn-primary">Add Gear</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary">Add Container</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary">Formula</button>
                </div>
                <div className="col">
                    <button className="btn btn-primary">Print</button>
                </div>
            </div>

            <div className="border border-dark rounded my-2">
                <div className="rounded bg-danger text-light">
                    <h5>Main Inventory</h5>
                </div>
                <div></div>
            </div>

            <div className="border border-dark rounded my-2">
                <div className="rounded bg-danger text-light">
                    <h5>Backpack</h5>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Gear;