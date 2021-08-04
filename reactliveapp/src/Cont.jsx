import React, { useState } from 'react';

const Cont = () => {

    const [Data,setData] = useState({
        fname:"",
        phone:"",
        email:"",
        msg:""
    });

    const events = (idata) => {
        const { name,value } = idata.target;

        setData((prevalue) => {
            return{
                ...prevalue,
                   [name]:value,
            }
        })
    }

    const formsubmit = (e) => {
        e.preventDefault();
        alert(Data.fname);
    }

    return(
        <>
            <div className="text-center mt-5">
                <h2>ContactUs</h2>
            </div>
            <div className="col-md-5 mx-auto mt-5 webcon">
                <form onSubmit={formsubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" onChange={events} value={Data.fname} name="fname" className="form-control" placeholder="Enter Name" />

                        <label for="exampleInputEmail1">Phone</label>
                        <input type="text" onChange={events} value={Data.phone} name="phone" className="form-control" placeholder="Enter mobile number" />

                        <label for="exampleInputEmail1">Email address</label>
                        <input type="text" onChange={events} value={Data.email} name="email" className="form-control" placeholder="Enter email" />

                        <label for="exampleInputEmail1">Email address</label><br/>
                        <textarea type="text" onChange={events} value={Data.msg} name="msg" className="form-control"></textarea>

                        <button>Submit Form</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cont;