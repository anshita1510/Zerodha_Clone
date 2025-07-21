import React from 'react';

function Awards() {
    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-6 p-5'>
                        <img src='media/images/largestBroker.svg' alt='Awards' />
                    </div>
                    <div className='col-6 p-5 mt-3'>
                        <h1>Trusted by millions. Leading the market</h1>
                        <p className='mb-5'>More than 2 million Zerodha clients contribute to over 15% of India’s daily retail trading volume, actively investing and trading in stocks, derivatives, mutual funds, and other financial instruments. </p>
                        <div className='row'>
                            <div className='col-6 '>
                                <ul>
                                    <li>
                                        <p>Future and Options</p>
                                    </li>
                                    <li>
                                        <p>Commodity derivatives</p>
                                    </li>
                                    <li>
                                        <p>Currency derivatives</p>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul>
                                    <li>
                                        <p>Stocks & IPOs</p>
                                    </li>
                                    <li>
                                        <p>Direct Mutual Funds</p>
                                    </li>
                                    <li>
                                        <p>Bonds and Govt. Securities</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    <img src='media/images/pressLogos.png' alt='Press Logo' style={{width:"90%"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
