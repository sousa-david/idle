import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Member() {

    const {id} = useParams();
    const [member, setMember] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/members/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            setMember(data)
        })
        .catch(err => console.log(err))
    }, [id])

    return (
        <div className="container">
            <h1 className="text-capitalize display-6">{member.name}</h1>
            <p>{member.bio}</p>
            <p>{member.status}</p>
        </div>
    )
}

export default Member