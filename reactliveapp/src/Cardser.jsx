import React from 'react';
import Cardelem from './Cardelem';
import Service from './Service';

const Cardser = () => {
    return(
        <>
            <div className="mt-5">
                <h2 className="text-center">Our Services</h2>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="col-md-10 col-10 mx-auto">
                        <div className="row gy-4">
                            {
                               Cardelem.map(function webcard (val){
                                  return <Service
                                       imgsrc={val.imgsrc}
                                       title={val.title}
                                       name={val.name}
                                       button={val.button}
                                   />
                               })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
        </>
    )
}

export default Cardser;