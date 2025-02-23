import React, { useEffect, useState } from "react";
import axios from 'axios'
function Home(){
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8081/')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <table>
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
                                    <button>Edit</button>
                                    <button>Delete</button>
                                    <button>Action</button>
                                </td>
                            </tr>
                        }
                    )

                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home