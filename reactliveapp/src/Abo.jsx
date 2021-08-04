import React from 'react';
import We2 from './Img/we2.png';

const Abo = () => {
    return(
        <>
           <div className="container-fluid heroweb">
               <div className="row">
                   <div className="col-md-10 col-10 mx-auto">
                       <div className="row">

                            <div className="col-md-6 col-12 herowebleft order-md-0 order-1">
                                <h1 className="webt">WE WILL HELP YOU TO</h1>
                                <h1 className="webst">GROW YOUR BUSINESS</h1>
                                <p className="webp">We Are The Team Of <span>Professional Devloper</span></p>
                                <a href="/contact" className="webb" style={{textDecoration:'none'}}>Contact Now</a>
                            </div>

                            <div className="col-md-6 col-12 herowebright order-md-1 order-0">
                                 <img src={We2} height="400" alt="" />
                            </div>

                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Abo;