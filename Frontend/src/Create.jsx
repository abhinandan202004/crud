import React, { useState } from "react";
import axios from "axios";



function Create(){
    const [values, setValues] = useState({
        name: '',
        usn: '',
        email: '',
        ctc: '',
        slab:''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/student', values)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
        
    
    return(
        <div className = 'd-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
            <div className ="w-80 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Add Student</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={e => setValues({...values, name: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">USN no</label>
                        <input type="text" placeholder="Enter USN number" className="form-control"
                        onChange={e => setValues({...values, usn: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        onChange={e => setValues({...values, email: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">CTC</label>
                        <input type="text" placeholder="Enter CTC" className="form-control"
                        onChange={e => setValues({...values, ctc: e.target.value})}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Slab</label>
                        <input type="text" placeholder="Enter Slab" className="form-control"
                        onChange={e => setValues({...values, slab: e.target.value})}/>
                    </div>
                    <button className="btn btn-danger">Submit</button>
                </form>
            </div>    
        </div>        
    )
}


export default Create;