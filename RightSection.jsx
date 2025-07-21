import React from "react";

function RightSection({ imageURL, productName, productDescription, learnMore }) {
    return (
        <div className="container mb-5">
            <div className="row ">


                <div className="col-6 p-5 mt-5">
                    <h1>
                        {productName}
                    </h1>
                    <p> {productDescription} </p>

                    <div className="mt-4 mb-5">

                        <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                </div>
                <div className="col-6 ">
                    <img src={imageURL} alt="product image" />
                </div>
            </div>
        </div>
    )
}

export default RightSection;