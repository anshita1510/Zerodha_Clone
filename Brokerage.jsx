import React from 'react';

function Brokerage() {
    return (
        
            <div className='row p-5 mt-5 text-center border-top' >
                
                <div className='col-8 p-4'>
                  <a href='' style={{textDecoration:"none", color:"#3b97ddff"}}> <h3 className='fs-5'> Brokerage calculator</h3> </a>

                  <ul className='text-muted mt-4' style={{textAlign:"left", lineHeight:"1.8", fontSize:"14px"}}>
                    <li>Call & Trade and RMS auto-squareoff: Additional charges of Rs.50 + GST per order.</li>
                   <li> Digital contract notes will be sent via e-mail.</li>
                  <li>  Physical copies of contract notes, if required, shall be charged Rs. 20 per contract note. Courier charges apply. </li>
                  <li>  For NRI OpenAccount(non-PIS), 0.5% or Rs. 100 per executed order whichever is lower, will be charged as a transaction charge. </li>
                   <li> For NRI account (PIS), 0,=.5% or Rs. 200 per executed order for equity (whichever is lower). </li>
               <li>     If the account is in debit balance, any order placed will be charged Rs.40 executed order whichever is lower. </li>
                  </ul>
                   
                

                </div>
                <div className='col-4 p-4'>
                  <a href='' style={{textDecoration:"none", color:"#3b97ddff"}}>  <h3 className='fs-5'> Total charges</h3> </a>
                </div>
            </div>
        
    );
}

export default Brokerage;

