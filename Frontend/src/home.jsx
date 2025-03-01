import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';



function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div className = 'd-flex vh-100 vw-100 bg-secondary justify-content-center align-items-center'>
            <div className ="w-73 bg-white rounded p-3">
                <div className="d-flex justify-content-end">
                    <Link to = "/create" className='btn btn-success'>Create +</Link>
                </div>
                <h2>Placement Stat</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>USN No</th>
                        <th>Email</th>
                        <th>CTC</th>
                        <th>Slab</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(
                        (student, index) => {
                            return <tr key={index}>
                                <td>{student.Name}</td>
                                <td>{student.USN}</td>
                                <td>{student.Email}</td>
                                <td>{student.CTC}</td>
                                <td>{student.Slab}</td>
                                <td>
                                    <button className="btn btn-sm btn-info">Read</button>
                                    <button className="btn btn-sm btn-primary mx-2">Edit</button>
                                    <button className="btn btn-sm btn-danger">Delete</button>
                                </td>
                            </tr>
                        }
                    )

                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Home