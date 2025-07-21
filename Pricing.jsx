import React from 'react';

function Pricing() {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col-4'>
                    <h1 className='mb-3 fs-2'> Unmatched Rates</h1>
                    <p>We pioneered the concept of discount broking and brought true price transparency to India’s investing landscape — offering flat fees with absolutely no hidden charges, so you always know
                    exactly what you're paying for.</p>
                    <a href=' ' style={{textDecoration:"none"}}> See Pricings <i className="fa fa-long-arrow-right" aria-hidden="true" ></i></a>
                </div>
                <div className='col-2'>

                </div>
                <div className='col-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col border p-3 ' >
                                <h1 className='mb-3'> ₹0 </h1>
                                <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className='col border p-3 ' >
                            <h1 className='mb-3'> ₹20 </h1>
                                <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;