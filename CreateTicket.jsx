import React from "react";

function CreateTicket() {
    return (
        <div className="container">
            <div className='row p-5 mt-5 mb-8'>
                <h1 className=''>
                    To create a ticket, Select a relevant topic.  <i class="fa-regular fa-face-smile-beam"></i>
                </h1>
                <div className="row">
                    <div className='col-4 p-5 mt-5 '>
                        <h4 >
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>  Account Opening
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > Online Account Opening </a>
                        <br />
                        <br />

                        <a href="" style={{ textDecoration: "none" }}> Offline Account Opening </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Company, Partnership and HUF Account</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>Opening </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Minor </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Resident Individual </a>
                    </div>
                    <div className='col-4 p-5 mt-5 mb-5'>
                        <h4 className='fs-4 '>
                            <i class="fa-regular fa-user " aria-hidden="true"></i>
                            &nbsp; Your Zerodha Account
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > Your Profile </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>Account modification </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Company, Partnership and HUF Account</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>
                            Client Master Report (CMR) and Depository Participant (DP) </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Nomination </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>  Transfer and conversion of securities </a>
                    </div>
                    <div className='col-4 p-5 mt-5 mb-5'>
                        <h4 className='fs-4 '>
                            <i class="fa-solid fa-chart-simple"></i> &nbsp;
                            Kite
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > IPO </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>Trading FAQs</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Margin Trading Facility (MTF) and Margins</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Charts and orders </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Alerts and Nudges </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> General  </a>
                    </div>
                </div>

                {/* 2nd row */}
                <div className="row">
                    <div className='col-4 p-5 mt-5 '>
                        <h4 >
                            <i class="fa-brands fa-fonticons"></i> &nbsp;
                            Funds
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > Add money</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Withdraw Money</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Add bank accounts</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>eMandates </a>
                        <br />
                        <br />

                    </div>


                    <div className='col-4 p-5 mt-5 mb-5'>
                        <h4 className='fs-4 '>
                            <i class="fa-brands fa-dribbble"></i> &nbsp;
                            Console
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > Portfolio </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Corporate actions </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Funds statement</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>
                            Reports </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Profile </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}>  Segments </a>
                    </div>


                    <div className='col-4 p-5 mt-5 mb-5'>
                        <h4 className='fs-4 '>
                            <i class="fa-brands fa-bitcoin"></i> &nbsp;
                            Coin
                        </h4>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none", marginTop: "2rem" }} > Mutual funds </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> National Pension Scheme (NPS)</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Fixed Deposit (FD)</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Features on Coin </a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> Payments and Orders</a>
                        <br />
                        <br />
                        <a href="" style={{ textDecoration: "none" }}> General  </a>
                    </div>
                </div>

                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}> My Tickets </button>

            </div>
        </div>
    );
}

export default CreateTicket;