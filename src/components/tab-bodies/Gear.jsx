import React from "react";

function Gear(props) {

    function IncrementCurrencyBy(key, val) {
        props.updateCharData("currency", { ...props.charData.currency, [key]: props.charData.currency[key] + val });
    }

    return (
        <div className="card-body">
            <div className="border border-dark rounded my-2">
                <div className="row">
                    <div className="col">
                        <h5>Platinum</h5>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("platinum", -1) }}>-</button>
                            </div>
                            <div className="col">
                                <p>{props.charData.currency.platinum}</p>
                            </div>
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("platinum", 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Gold</h5>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("gold", -1) }}>-</button>
                            </div>
                            <div className="col">
                                <p>{props.charData.currency.gold}</p>
                            </div>
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("gold", 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Silver</h5>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("silver", -1) }}>-</button>
                            </div>
                            <div className="col">
                                <p>{props.charData.currency.silver}</p>
                            </div>
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("silver", 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <h5>Copper</h5>
                        <div className="row">
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("copper", -1) }}>-</button>
                            </div>
                            <div className="col">
                                <p>{props.charData.currency.copper}</p>
                            </div>
                            <div className="col">
                                <button onClick={() => { IncrementCurrencyBy("copper", 1) }}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-dark rounded my-2">
                <div className="row">
                    <div className="col">
                        <p><b>Current Bulk: </b> {props.charData.currentBulk} </p>
                    </div>
                    <div className="col">
                        <p><b>Encumbered: </b> {props.charData.encumbered} </p>
                    </div>
                    <div className="col">
                        <p><b>Maximum: </b> {props.charData.maximum} </p>
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