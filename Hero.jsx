import React from "react";

function Hero() {
    return (
        <section className="container" id="supportHero">
            <div className=' p-5' id="supportWrapper">
                <h4 className=''>
                    Support Portal                
                </h4>
                <a href="" style={{color:"white"}}>Track Tickets</a>
            </div>
            <div className='row p-5 m-3'> 
                <div className="col-6 p-5 ">
                    <h1 className="fs-3 ">Search for an answer or browse help topics to create a ticket.</h1>
                    <br />
                    <input placeholder="Eg. how do I activate F&O, why is my order getting rejected." />
                    <br />
                    <a href="" style={{color:"white"}} >Track account opening</a> &nbsp;
                    <a href="" style={{color:"white"}}>Track segment activation </a> &nbsp;
                    <br />
                    <a href="" style={{color:"white"}}>Intraday margins </a> &nbsp;
                    <a href="" style={{color:"white"}}>Kite User manual</a>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Featured</h1>
                    <ol>
                    <li> <a href="" style={{color:"white", lineHeight:"5"}}>  Current TakeOvers and Delisting - January 2024</a></li>
                    <li><a href="" style={{color:"white"}}>  Latest Intraday leverages - MIS & CO </a> &nbsp;</li>
                  </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;