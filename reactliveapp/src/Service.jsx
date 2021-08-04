import React from 'react';
import './index.css';

const Service = (props) => {

    return(
        <>
            <div className="col-md-4 col-12">
                <div class="card">
                    <img class="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.name}</p>
                        <a href="#" class="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;