import React from "react";

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore

}) {
    return (
        <div className="container mb-5">
            <div className="row ">
                <div className="col-6 ">
                    <img src={imageURL} alt="product image" />
                </div>
                
                <div className="col-6 p-5 mt-4">
                    <h1>
                        {productName}
                    </h1>
                    <p> {productDescription} </p>

                    <div className="mt-4 mb-4">
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i> </a>
                        <a href={learnMore} style={{marginLeft:"50px", textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                    <div><a href={googlePlay} ><img src="media/images/googlePlayBadge.svg" /></a> &nbsp;
                        <a href={appStore} ><img src="media/images/appstoreBadge.svg" /></a></div>
                </div>
                <div className="col-6"></div>

            </div>
        </div>
    )
}

export default LeftSection;