import React from 'react'

function Awards() {
    return (
        <div className="container  text-center mx-auto p-5">
            <div className="row p-5">
                <div className="col-6">
                    <img src='media\images\largestBroker.svg' alt="Awards and Recognition" className="img-fluid mb-4" />
                </div>
                <div className="col-6 mt-4">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clints contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row mt-5">
                        <div className="col">
                            <ul>
                                <li>Future and options</li>
                                <li>Commedity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul>
                                <li>Stocks and IPOs</li>
                                <li>Direct mutural funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                        <img src='media/images/pressLogos.png' alt="Awards and Recognition" className="img-fluid mt-5" />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Awards;