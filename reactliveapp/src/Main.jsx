import React from 'react';
import We1 from './Img/we.png';

const Main = () => {
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
                                <a href="/service" className="webb" style={{textDecoration:'none'}}>Get Started</a>
                            </div>

                            <div className="col-md-6 col-12 herowebright order-md-1 order-0">
                                 <img src={We1} height="400" alt="" />
                            </div>

                       </div>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Main;